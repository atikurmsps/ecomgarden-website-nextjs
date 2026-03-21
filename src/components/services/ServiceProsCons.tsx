import { FaCheck, FaTimes } from "react-icons/fa";

interface ServiceProsConsProps {
  heading: string;
  pros: string[];
  cons: string[];
}

export default function ServiceProsCons({
  heading,
  pros,
  cons,
}: ServiceProsConsProps) {
  return (
    <section style={{ padding: "44px 0", backgroundColor: "#fff", fontFamily: "var(--font-roboto)" }}>
      <div className="container-main">
        {/* Section Label */}
        <div style={{ textAlign: "center", marginBottom: "10px" }}>
          <span
            style={{
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "1.5px",
              textTransform: "uppercase" as const,
              color: "var(--color-primary)",
            }}
          >
            PROS &amp; CONS
          </span>
        </div>

        <h2
          style={{
            fontSize: "27px",
            fontWeight: 700,
            textAlign: "center",
            color: "var(--color-dark)",
            marginBottom: "32px",
            fontFamily: "var(--font-roboto)",
          }}
        >
          {heading}
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "20px",
            maxWidth: "900px",
            margin: "0 auto",
          }}
          className="md:!grid-cols-2"
        >
          {/* Pros Card */}
          <div
            style={{
              backgroundColor: "#fff",
              borderRadius: "12px",
              padding: "24px",
              borderLeft: "4px solid var(--color-primary)",
              boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
            }}
          >
            <h3
              style={{
                fontSize: "19px",
                fontWeight: 700,
                color: "var(--color-primary)",
                marginBottom: "16px",
                fontFamily: "var(--font-roboto)",
              }}
            >
              Pros
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {pros.map((pro) => (
                <li
                  key={pro}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    marginBottom: "12px",
                  }}
                >
                  <span
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      background: "color-mix(in srgb, var(--color-primary) 12%, transparent)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  >
                    <FaCheck style={{ fontSize: "10px", color: "var(--color-primary)" }} />
                  </span>
                  <span
                    style={{
                      fontSize: "15px",
                      lineHeight: "24px",
                      color: "var(--color-text)",
                      fontFamily: "var(--font-roboto)",
                    }}
                  >
                    {pro}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Cons Card */}
          <div
            style={{
              backgroundColor: "#fff",
              borderRadius: "12px",
              padding: "24px",
              borderLeft: "4px solid #e74c3c",
              boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
            }}
          >
            <h3
              style={{
                fontSize: "19px",
                fontWeight: 700,
                color: "#e74c3c",
                marginBottom: "16px",
                fontFamily: "var(--font-roboto)",
              }}
            >
              Cons
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {cons.map((con) => (
                <li
                  key={con}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    marginBottom: "12px",
                  }}
                >
                  <span
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      background: "rgba(231, 76, 60, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  >
                    <FaTimes style={{ fontSize: "10px", color: "#e74c3c" }} />
                  </span>
                  <span
                    style={{
                      fontSize: "15px",
                      lineHeight: "24px",
                      color: "var(--color-text)",
                      fontFamily: "var(--font-roboto)",
                    }}
                  >
                    {con}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
