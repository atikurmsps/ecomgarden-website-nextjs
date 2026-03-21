import Image from "next/image";

const steps = [
  {
    img: "/images/process/discussion.png",
    title: "Discussion",
    description:
      "Discuss your requirements with us. Make agreement for your needs and pricing",
  },
  {
    img: "/images/process/get-access.png",
    title: "Get Access",
    description:
      "Send your store access to us. As well others portal's access based on requirements",
  },
  {
    img: "/images/process/planning.png",
    title: "Planing",
    description:
      "We will make plan to get maximum profit output and inform you everyting",
  },
  {
    img: "/images/process/growth.png",
    title: "Growth",
    description:
      "We will implement plan into reality and get stating max profit as possible",
  },
  {
    img: "/images/process/calculation.png",
    title: "Calculation",
    description:
      "We will calculate every sales and build a report. As well we will get paid from you",
  },
];

export default function ProcessSection() {
  return (
    <section style={{ padding: "30px 0 25px" }} className="bg-white">
      <div className="container-main">
        <h2
          className="font-bold text-center text-black mb-12"
          style={{ fontSize: "32px", lineHeight: "32px" }}
        >
          How Our Management Service Works
        </h2>

        <div className="flex flex-col lg:flex-row items-start justify-between">
          {steps.map((step, index) => (
            <div key={step.title} className="flex items-start flex-1">
              {/* Step content */}
              <div className="text-center flex-shrink-0 w-full">
                <div className="flex justify-center mb-4">
                  <Image
                    src={step.img}
                    alt={step.title}
                    width={90}
                    height={90}
                    className="w-[80px] h-[80px] object-contain"
                  />
                </div>
                <h3 className="text-[20px] font-bold text-[#333] mb-2">
                  {step.title}
                </h3>
                <p className="text-[#2b2e37] text-[15px] leading-[22px] px-2">
                  {step.description}
                </p>
              </div>

              {/* Arrow between steps */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex items-center flex-shrink-0 pt-8 px-1">
                  <Image
                    src="/images/process/arrow.webp"
                    alt="arrow"
                    width={35}
                    height={35}
                    className="w-[30px] h-auto opacity-50"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
