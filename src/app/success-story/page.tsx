import type { Metadata } from "next";
import { FaCheckCircle } from "react-icons/fa";
import CTASection from "@/components/home/CTASection";
import LocalVideo from "@/components/LocalVideo";

const TITLE = "Client Success Stories — Real EcomGarden Results";
const DESC =
  "See real EcomGarden client results: stores scaling to six figures with strong ROI. Over $12M generated for 250+ sellers through our done-for-you ecommerce management.";
const URL = "/success-story";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: URL },
  openGraph: { type: "website", siteName: "EcomGarden", url: URL, title: `${TITLE} | EcomGarden`, description: DESC },
  twitter: { card: "summary_large_image", title: `${TITLE} | EcomGarden`, description: DESC },
};

const clientStories = [
  {
    heading:
      "Celena's Store made $153,438 sales in 4 months with 35% ROI",
    video: "3months",
    bullets: [
      "Over $58,200 in last month sales",
      "More than 35% ROI made",
      "0.02% Order defect rate",
      "ZERO account health issue",
    ],
  },
  {
    heading:
      "Thompson's Store made $691,224 sales in 11 months with 35% ROI",
    video: "yearsales",
    bullets: [
      "Over $95,000 in last month sales",
      "More than 35% ROI made",
      "0.02% Order defect rate",
      "ZERO account health issue",
    ],
  },
  {
    heading:
      "Joseph's Store made $8,780 sales in just 2 days with 25% ROI",
    video: "3days",
    bullets: [
      "Over $50,000 in last month sales",
      "More than 25% ROI made",
      "0.02% Order defect rate",
      "ZERO account health issue",
    ],
  },
];

export default function SuccessStoryPage() {
  return (
    <>
      {/* Hero Section */}
      <section style={{ background: "#f6f7f9", padding: "55px 0" }}>
        <div className="container-main text-center">
          <div className="section-header">
            <span className="typo-label">Proven Results</span>
            <h1 className="typo-h1">Client Success Stories</h1>
            <p className="typo-subtext" style={{ maxWidth: "520px", margin: "0 auto" }}>
              Real results from real clients. See how our managed stores
              consistently deliver strong ROI and healthy accounts.
            </p>
          </div>
        </div>
      </section>

      {/* Stories Section */}
      <section style={{ background: "#fff", padding: "55px 0" }}>
        <div className="container-main">
          <div className="flex flex-col gap-5">
            {clientStories.map((story) => (
              <div
                key={story.heading}
                className="rounded-xl"
                style={{
                  background: "#fff",
                  padding: "24px",
                  border: "1px solid #e8e8ee",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                  {/* Video */}
                  <div
                    className="relative w-full rounded-lg overflow-hidden"
                    style={{ paddingBottom: "56.25%" }}
                  >
                    <LocalVideo
                      src={`/videos/${story.video}.mp4`}
                      poster={`/images/video-thumbs/${story.video}.jpg`}
                      title={story.heading}
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="typo-h3" style={{ marginBottom: "16px" }}>
                      {story.heading}
                    </h3>
                    <ul className="space-y-2.5">
                      {story.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-2.5"
                        >
                          <FaCheckCircle
                            className="flex-shrink-0"
                            style={{
                              color: "var(--color-primary)",
                              fontSize: "14px",
                              marginTop: "2px",
                            }}
                          />
                          <span className="typo-body">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
