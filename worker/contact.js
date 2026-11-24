const MAX_BODY_BYTES = 32 * 1024;
const RECIPIENT = "shohel@ecomgarden.com";

function error(message, status, headers) {
  return Response.json({ error: message }, { status, headers });
}

async function sendContactEmail(request, env, url) {
  if (request.method !== "POST") {
    return error("Use POST to submit the contact form.", 405, { Allow: "POST" });
  }

  if (request.headers.get("Origin") !== url.origin) {
    return error("Please submit the form from the Contact Us page.", 403);
  }

  if (request.headers.get("Content-Type")?.split(";")[0].trim() !== "application/json") {
    return error("Expected a JSON submission.", 415);
  }

  if (!request.body) {
    return error("Enter a valid email address and message.", 400);
  }

  const ip = request.headers.get("CF-Connecting-IP") ?? "unknown";
  const { success } = await env.CONTACT_RATE_LIMIT.limit({ key: ip });
  if (!success) {
    return error("Too many attempts. Try again in a minute.", 429, { "Retry-After": "60" });
  }

  const reader = request.body.getReader();
  const decoder = new TextDecoder();
  let bytes = 0;
  let body = "";
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    bytes += value.byteLength;
    if (bytes > MAX_BODY_BYTES) {
      await reader.cancel();
      return error("The message is too large.", 413);
    }
    body += decoder.decode(value, { stream: true });
  }

  let fields;
  try {
    fields = JSON.parse(body + decoder.decode());
  } catch {
    return error("Invalid submission.", 400);
  }

  if (!fields || fields.website !== "") {
    return error("Invalid submission.", 400);
  }

  const name = typeof fields.name === "string" ? fields.name.trim() : "";
  const email = typeof fields.email === "string" ? fields.email.trim() : "";
  const subject = typeof fields.subject === "string" ? fields.subject.trim() : "";
  const message = typeof fields.message === "string" ? fields.message.trim() : "";

  if (name.length > 120 || email.length > 254 || subject.length > 160 ||
      !/^[^\s@<>(),;:\\"\[\]]+@[^\s@<>(),;:\\"\[\]]+\.[^\s@<>(),;:\\"\[\]]+$/.test(email) ||
      !message || message.length > 5000) {
    return error("Enter a valid email address and a message up to 5,000 characters.", 400);
  }

  const delivery = await env.CONTACT_EMAIL.send({
    from: { email: "contact-form@contact-mail.ecomgarden.com", name: "EcomGarden Website" },
    to: RECIPIENT,
    replyTo: email,
    subject: "New EcomGarden website inquiry",
    text: `Name: ${name || "Not provided"}\nEmail: ${email}\nSubject: ${subject || "Not provided"}\n\n${message}`,
  });

  if (!delivery.messageId) {
    throw new Error("Email provider returned no message ID");
  }

  return Response.json({ ok: true });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname !== "/api/contact") return env.ASSETS.fetch(request);

    try {
      return await sendContactEmail(request, env, url);
    } catch (cause) {
      console.error("Contact submission failed", { code: cause?.code ?? "CONTACT_SUBMIT_FAILED" });
      return error(`We couldn’t send your message. Try again or email ${RECIPIENT}.`, 503);
    }
  },
};
