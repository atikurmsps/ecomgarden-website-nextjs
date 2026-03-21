import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function CTASection() {
  return (
    <section style={{ padding: "40px 0 40px", backgroundColor: "#f1f1f1" }}>
      <div className="container-main text-center">
        <h2
          className="font-bold text-[#333] mb-4 leading-tight"
          style={{ fontSize: "37px", lineHeight: "45px" }}
        >
          So, why you are spending time and losing your opportunity ?
        </h2>
        <p
          className="text-[#333] mb-3 max-w-3xl mx-auto leading-relaxed"
          style={{ fontSize: "16px" }}
        >
          Connect with our in-house team of highly vetted experts and start
          growing your eCommerce business today.
        </p>
        <p
          className="text-[#86af51] font-semibold mb-8"
          style={{ fontSize: "16px" }}
        >
          We are online CST 11 PM to 3 PM
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="btn-primary">
            Contact Us
          </Link>
          <a
            href="https://wa.link/m2ac6m"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-orange flex items-center gap-2"
          >
            <FaWhatsapp className="text-lg" />
            Quick Whatsapp
          </a>
        </div>
      </div>
    </section>
  );
}
