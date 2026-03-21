import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function SuccessStoriesPreview() {
  return (
    <section style={{ padding: "35px 0 50px", backgroundColor: "#f4f3f3" }}>
      <div className="container-main">
        <h2
          className="font-extrabold text-center mb-4"
          style={{ fontSize: "32px", lineHeight: "48px", color: "#e5a24e" }}
        >
          Some of Our Client&apos;s Store Results
        </h2>
        <p
          className="text-center text-[#333] mb-10 max-w-3xl mx-auto leading-relaxed"
          style={{ fontSize: "16px" }}
        >
          At the heart of our success are our satisfied clients. Join the
          community of happy clients who have entrusted us with their e-commerce
          ventures. Your success story could be the next one we proudly feature.
        </p>

        {/* YouTube Video Embeds */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 max-w-4xl mx-auto">
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute inset-0 w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/9DqDFAGLPrc"
              title="Client Success Story"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ border: "none" }}
            />
          </div>
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute inset-0 w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/D8B-AKLZciA"
              title="Client Success Story"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ border: "none" }}
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/success-story" className="btn-outline">
            More Success Stories
          </Link>
          <a
            href="https://wa.link/m2ac6m"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-orange flex items-center gap-2"
          >
            <FaWhatsapp className="text-lg" />
            Quick Whatsapp
          </a>
        </div>
      </div>
    </section>
  );
}
