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
      {/* Dark Hero Section */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "var(--color-dark)",
          padding: "44px 0 36px",
        }}
      >
        {/* Decorative circles */}
        <div
          className="absolute rounded-full opacity-10"
          style={{
            width: "260px",
            height: "260px",
            background: "var(--color-primary)",
            top: "-80px",
            right: "-60px",
          }}
        />
        <div
          className="absolute rounded-full opacity-5"
          style={{
            width: "180px",
            height: "180px",
            background: "var(--color-primary)",
            bottom: "-60px",
            left: "-40px",
          }}
        />

        <div className="container-main relative z-10 text-center">
          <span
            className="inline-block rounded-full font-medium"
            style={{
              background: "rgba(40, 167, 69, 0.12)",
              color: "var(--color-primary)",
              fontSize: "14px",
              padding: "5px 16px",
              marginBottom: "14px",
              fontFamily: "var(--font-roboto)",
            }}
          >
            Proven Results
          </span>
          <h1
            className="text-white font-bold"
            style={{
              fontSize: "30px",
              lineHeight: "38px",
              marginBottom: "10px",
              fontFamily: "var(--font-roboto)",
            }}
          >
            Client Success Stories
          </h1>
          <p
            style={{
              color: "#9494ac",
              fontSize: "16px",
              lineHeight: "22px",
              maxWidth: "520px",
              margin: "0 auto",
              fontFamily: "var(--font-roboto)",
            }}
          >
            Real results from real clients. See how our managed stores
            consistently deliver strong ROI and healthy accounts.
          </p>
        </div>
      </section>

      {/* Stories Section */}
      <section
        style={{
          background: "var(--color-light-gray)",
          padding: "44px 0",
        }}
      >
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
                  {/* YouTube Embed */}
                  <div
                    className="relative w-full rounded-lg overflow-hidden"
                    style={{ paddingBottom: "56.25%" }}
                  >
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${story.videoId}`}
                      title={story.heading}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <h3
                      className="font-bold"
                      style={{
                        fontSize: "18px",
                        lineHeight: "26px",
                        color: "var(--color-text)",
                        marginBottom: "16px",
                        fontFamily: "var(--font-roboto)",
                      }}
                    >
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
                          <span
                            style={{
                              fontSize: "15px",
                              lineHeight: "20px",
                              color: "var(--color-text-light)",
                              fontFamily: "var(--font-roboto)",
                            }}
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
