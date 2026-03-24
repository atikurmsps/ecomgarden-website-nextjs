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
    <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
      <div className="container-main">
        <div className="section-header">
          <span className="typo-label">PROS &amp; CONS</span>
          <h2 className="typo-h2">{heading}</h2>
        </div>

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
              borderRadius: "10px",
              padding: "24px",
              borderLeft: "4px solid var(--color-primary)",
              border: "1px solid rgba(0,0,0,0.06)",
              borderLeftWidth: "4px",
              borderLeftColor: "var(--color-primary)",
            }}
          >
            <h3 className="typo-h3" style={{ color: "var(--color-primary)", marginBottom: "16px" }}>
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
                  <span className="typo-body" style={{ margin: 0 }}>
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
              borderRadius: "10px",
              padding: "24px",
              border: "1px solid rgba(0,0,0,0.06)",
              borderLeftWidth: "4px",
              borderLeftColor: "#e74c3c",
            }}
          >
            <h3 className="typo-h3" style={{ color: "#e74c3c", marginBottom: "16px" }}>
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
                  <span className="typo-body" style={{ margin: 0 }}>
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
