"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function SuccessStoriesPreview() {
  return (
    <section style={{ padding: "40px 0", backgroundColor: "var(--color-light-gray)", fontFamily: "var(--font-roboto)" }}>
      <div className="container-main">
        <div style={{ textAlign: "center", marginBottom: "6px" }}>
          <span
            style={{
              fontSize: "13px",
              fontWeight: 700,
              textTransform: "uppercase" as const,
              letterSpacing: "1.5px",
              color: "var(--color-primary)",
            }}
          >
            Success Stories
          </span>
        </div>
        <h2
          style={{
            fontSize: "25px",
            fontWeight: 800,
            textAlign: "center",
            color: "var(--color-text)",
            marginBottom: "8px",
            lineHeight: "30px",
          }}
        >
          Some of Our Client&apos;s Store Results
        </h2>
        <p
          style={{
            fontSize: "15px",
            lineHeight: "20px",
            color: "var(--color-text-light)",
            textAlign: "center",
            maxWidth: "640px",
            margin: "0 auto 24px",
          }}
        >
          At the heart of our success are our satisfied clients. Join the
          community of happy clients who have entrusted us with their e-commerce
          ventures. Your success story could be the next one we proudly feature.
        </p>

        {/* YouTube Video Embeds */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "16px",
            maxWidth: "720px",
            margin: "0 auto 24px",
          }}
          className="success-videos"
        >
          <div
            style={{
              position: "relative",
              paddingBottom: "56.25%",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
          >
            <iframe
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: "none",
              }}
              src="https://www.youtube.com/embed/9DqDFAGLPrc"
              title="Client Success Story"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div
            style={{
              position: "relative",
              paddingBottom: "56.25%",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
          >
            <iframe
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: "none",
              }}
              src="https://www.youtube.com/embed/D8B-AKLZciA"
              title="Client Success Story"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px" }}>
          <Link href="/success-story" className="btn-outline">
            More Success Stories
          </Link>
          <a
            href="https://wa.link/m2ac6m"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-orange"
            style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}
          >
            <FaWhatsapp style={{ fontSize: "16px" }} />
            Quick Whatsapp
          </a>
        </div>

        <style jsx>{`
          @media (max-width: 639px) {
            .success-videos {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
