import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Done-For-You Amazon Dropshipping — Pay Only From Profit | EcomGarden";
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
          padding: "70px 80px",
          background:
            "radial-gradient(900px 520px at 50% -12%, rgba(34,197,94,0.22) 0%, rgba(34,197,94,0) 60%), linear-gradient(160deg, #0d1322 0%, #0b0f1a 100%)",
          fontFamily: "sans-serif",
          color: "#ffffff",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "linear-gradient(180deg, #22c55e, #16a34a)",
              fontSize: 32,
              fontWeight: 800,
              color: "#06210f",
            }}
          >
            E
          </div>
          <div style={{ display: "flex", fontSize: 30, fontWeight: 700, letterSpacing: -1 }}>EcomGarden</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              display: "flex",
              fontSize: 16,
              fontWeight: 700,
              letterSpacing: 5,
              textTransform: "uppercase",
              color: "#22c55e",
            }}
          >
            Done-For-You Amazon Dropshipping
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 60,
              fontWeight: 800,
              lineHeight: 1.07,
              letterSpacing: -2,
              maxWidth: 940,
            }}
          >
            Own an Amazon Store That Pays a 30–40% Margin
          </div>
          <div style={{ display: "flex", fontSize: 27, color: "#9aa3b8", maxWidth: 900 }}>
            $0 upfront — you pay only from profit. We build, stock & run it through our 3 US warehouses.
          </div>
        </div>

        <div style={{ display: "flex", gap: 56 }}>
          {[
            ["$12M+", "generated for clients"],
            ["250+", "clients served"],
            ["7 days", "to first profit"],
            ["100%", "profit guarantee"],
          ].map(([v, l]) => (
            <div key={l} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <div style={{ display: "flex", fontSize: 38, fontWeight: 800, color: "#22c55e" }}>{v}</div>
              <div style={{ display: "flex", fontSize: 18, color: "#9aa3b8" }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
