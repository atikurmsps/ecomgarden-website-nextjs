import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "EcomGarden — Done-For-You eCommerce Management";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "radial-gradient(900px 500px at 78% -10%, rgba(34,197,94,0.22) 0%, rgba(34,197,94,0) 60%), linear-gradient(160deg, #0d1322 0%, #0b0f1a 100%)",
          fontFamily: "sans-serif",
          color: "#ffffff",
        }}
      >
        {/* brand row */}
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "linear-gradient(180deg, #22c55e, #16a34a)",
              fontSize: 38,
              fontWeight: 800,
              color: "#06210f",
            }}
          >
            E
          </div>
          <div style={{ display: "flex", fontSize: 34, fontWeight: 700, letterSpacing: -1 }}>
            EcomGarden
          </div>
        </div>

        {/* headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              fontSize: 16,
              fontWeight: 700,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#22c55e",
            }}
          >
            All-in-One Ecommerce Management
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 62,
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: -2,
              maxWidth: 920,
            }}
          >
            We Start, Grow &amp; Scale Your eCommerce Business
          </div>
          <div style={{ display: "flex", fontSize: 27, color: "#9aa3b8", maxWidth: 880 }}>
            Amazon · Walmart · eBay · Shopify — fully managed by a 50+ person team & 3 US warehouses.
          </div>
        </div>

        {/* stats row */}
        <div style={{ display: "flex", gap: 56 }}>
          {[
            ["$12M+", "client revenue / yr"],
            ["250+", "happy clients"],
            ["55+", "stores managed"],
            ["35%", "average ROI"],
          ].map(([v, l]) => (
            <div key={l} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <div style={{ display: "flex", fontSize: 40, fontWeight: 800, color: "#22c55e" }}>{v}</div>
              <div style={{ display: "flex", fontSize: 18, color: "#9aa3b8" }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
