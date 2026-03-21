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
    <section style={{ padding: "40px 0" }} className="bg-white">
      <div className="container-main">
        <h2
          className="font-bold text-center mb-10"
          style={{ fontSize: "32px", color: "#2b2e37" }}
        >
          {heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Pros */}
          <div>
            <h3
              className="font-bold text-[#86af51] mb-4"
              style={{ fontSize: "24px" }}
            >
              Pros
            </h3>
            <ul className="space-y-3">
              {pros.map((pro) => (
                <li key={pro} className="flex items-start gap-3">
                  <FaCheck className="text-[#86af51] mt-1 flex-shrink-0" />
                  <span
                    className="text-[#333]"
                    style={{ fontSize: "16px", lineHeight: "24px" }}
                  >
                    {pro}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Cons */}
          <div>
            <h3
              className="font-bold text-[#e74c3c] mb-4"
              style={{ fontSize: "24px" }}
            >
              Cons
            </h3>
            <ul className="space-y-3">
              {cons.map((con) => (
                <li key={con} className="flex items-start gap-3">
                  <FaTimes className="text-[#e74c3c] mt-1 flex-shrink-0" />
                  <span
                    className="text-[#333]"
                    style={{ fontSize: "16px", lineHeight: "24px" }}
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
