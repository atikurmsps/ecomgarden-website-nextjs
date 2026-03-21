import { FaCheckCircle } from "react-icons/fa";
import CTASection from "@/components/home/CTASection";

const clientStories = [
  {
    heading:
      "Celena's Store made $153,438 sales in 4 months with 35% ROI",
    videoId: "9DqDFAGLPrc",
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
    videoId: "2TxAECYAyM0",
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
    videoId: "D8B-AKLZciA",
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
      {/* Results Section */}
      <section style={{ padding: "50px 0" }} className="bg-white">
        <div className="container-main">
          <h2
            className="font-extrabold text-center mb-10 uppercase"
            style={{ fontSize: "32px", lineHeight: "48px" }}
          >
            <span style={{ color: "#2b2e37" }}>Some of Our </span>
            <span style={{ color: "#e5a24e" }}>
              Client&apos;s Store Results
            </span>
          </h2>

          <div className="space-y-8">
            {clientStories.map((story) => (
              <div
                key={story.heading}
                className="rounded-[4px]"
                style={{
                  padding: "30px",
                  border: "2px dashed #86af51",
                }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {/* Video */}
                  <div
                    className="relative w-full"
                    style={{ paddingBottom: "56.25%" }}
                  >
                    <iframe
                      className="absolute top-0 left-0 w-full h-full rounded-[4px]"
                      src={`https://www.youtube.com/embed/${story.videoId}`}
                      title={story.heading}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <h3
                      className="font-bold text-[#333] mb-5"
                      style={{ fontSize: "24px", lineHeight: "34px" }}
                    >
                      {story.heading}
                    </h3>
                    <ul className="space-y-3">
                      {story.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3">
                          <FaCheckCircle
                            className="text-[#86af51] mt-1 flex-shrink-0"
                            style={{ fontSize: "16px" }}
                          />
                          <span
                            className="text-[#333]"
                            style={{ fontSize: "16px", lineHeight: "24px" }}
                          >
                            {bullet}
                          </span>
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
