import Image from "next/image";

export default function WhyUsSection() {
  return (
    <section style={{ padding: "50px 0 40px" }} className="bg-white">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left - Image (matching original: image on LEFT) */}
          <div className="flex justify-center">
            <div className="relative">
              <Image
                src="/images/hero/sales-screenshot.webp"
                alt="700k Sales in 1 Year"
                width={570}
                height={320}
                className="w-full rounded-lg shadow-[0px_0px_20px_rgba(0,0,0,0.25)]"
              />
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[65px] h-[65px] bg-[#86af51] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#6d9340] transition-colors shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="w-7 h-7 ml-1"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Text Content (matching original: text on RIGHT) */}
          <div>
            <h2
              className="font-bold text-[#333] mb-5 leading-tight"
              style={{ fontSize: "32px", lineHeight: "32px" }}
            >
              Why You Will Get Our Ecommerce Management Services ?
            </h2>
            <p
              className="text-[#333] mb-4 leading-relaxed"
              style={{ fontSize: "16px", textAlign: "justify" }}
            >
              Are you want to grow your online e-commerce business quickly
              without any risk? Use our automated e-commerce management services
              and experience the results you have always wanted.
            </p>
            <p
              className="text-[#333] leading-relaxed"
              style={{ fontSize: "16px", textAlign: "justify" }}
            >
              We manage the e-commerce store completely from start to finish,
              including top-selling product research, listing, sourcing, order
              processing, fulfillment, shipping, return handling, customer
              support, account health check, reporting and everything from A to
              Z.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
