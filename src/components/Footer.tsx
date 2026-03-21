import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Referral Program", href: "/referral" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms & Conditions", href: "/terms" },
];

const serviceLinks = [
  { name: "3PL Warehouse", href: "/services/3pl-warehouse" },
  { name: "Amazon Arbitrage", href: "/services/amazon-arbitrage" },
  { name: "Amazon Wholesale", href: "/services/amazon-wholesale" },
  { name: "Flat Rate Shipping", href: "/services/flat-rate-shipping" },
  { name: "Walmart Management", href: "/services/walmart-management" },
];

const socialLinks = [
  {
    icon: FaFacebookF,
    href: "https://facebook.com/ecomgarden",
    label: "Facebook",
  },
  {
    icon: FaYoutube,
    href: "https://youtube.com/@ecomgarden",
    label: "YouTube",
  },
  {
    icon: FaLinkedinIn,
    href: "https://linkedin.com/company/ecomgarden",
    label: "LinkedIn",
  },
];

export default function Footer() {
  return (
    <footer>
      {/* Top CTA Strip */}
      <div className="bg-[#86af51] py-6">
        <div className="container-main">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-white text-center md:text-left">
              <p className="text-lg font-semibold">
                Ready to scale your eCommerce business?
              </p>
              <p className="text-white/80 text-sm">
                Connect with our experts and start growing today.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#130f40] px-7 py-3 rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors"
            >
              Get Started
              <FaArrowRight className="text-xs" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-[#130f40] text-white pt-16 pb-10">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
            {/* Company Info - wider column */}
            <div className="lg:col-span-4">
              <Link href="/" className="inline-block mb-5">
                <Image
                  src="/images/logo.webp"
                  alt="EcomGarden"
                  width={200}
                  height={73}
                  className="w-auto brightness-200"
                  style={{ height: "46px" }}
                />
              </Link>
              <p className="text-sm font-medium text-[#86af51] mb-2">
                All-in-One Ecommerce Management Services
              </p>
              <p className="text-gray-400 text-[13px] leading-relaxed mb-6">
                Operated by Ekkid LLC (USA) and ITFLE LTD (UK). Your trusted
                partner for complete eCommerce management solutions — from
                sourcing to shipping.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-10 h-10 border border-white/15 rounded-lg flex items-center justify-center hover:bg-[#86af51] hover:border-[#86af51] transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="text-sm text-gray-400 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Company Links */}
            <div className="lg:col-span-2 lg:col-start-6">
              <h4 className="text-[15px] font-semibold mb-5 text-white relative">
                Company
                <span className="block w-8 h-0.5 bg-[#86af51] mt-2 rounded-full" />
              </h4>
              <ul className="space-y-2.5">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-[#86af51] hover:pl-1 transition-all duration-200 text-[13px]"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="lg:col-span-3">
              <h4 className="text-[15px] font-semibold mb-5 text-white relative">
                Our Services
                <span className="block w-8 h-0.5 bg-[#86af51] mt-2 rounded-full" />
              </h4>
              <ul className="space-y-2.5">
                {serviceLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-[#86af51] hover:pl-1 transition-all duration-200 text-[13px]"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-3">
              <h4 className="text-[15px] font-semibold mb-5 text-white relative">
                Get In Touch
                <span className="block w-8 h-0.5 bg-[#86af51] mt-2 rounded-full" />
              </h4>
              <div className="space-y-4">
                <a
                  href="tel:+13072055481"
                  className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-[13px]"
                >
                  <span className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#86af51]/20 transition-colors">
                    <FaPhoneAlt className="text-[#86af51] text-[11px]" />
                  </span>
                  +1 307 205 5481
                </a>
                <a
                  href="mailto:info@ecomgarden.com"
                  className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-[13px]"
                >
                  <span className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#86af51]/20 transition-colors">
                    <FaEnvelope className="text-[#86af51] text-[11px]" />
                  </span>
                  info@ecomgarden.com
                </a>
                <div className="group flex items-start gap-3 text-gray-400 text-[13px]">
                  <span className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FaMapMarkerAlt className="text-[#86af51] text-[11px]" />
                  </span>
                  <span className="leading-relaxed">
                    30 N Gould St, Sheridan,
                    <br />
                    WY 82801, USA
                  </span>
                </div>
                <div className="group flex items-start gap-3 text-gray-400 text-[13px]">
                  <span className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FaMapMarkerAlt className="text-[#86af51] text-[11px]" />
                  </span>
                  <span className="leading-relaxed">
                    71-75 Shelton St, London
                    <br />
                    WC2H 9JQ, UK
                    <span className="text-gray-500 text-[11px] ml-1">
                      #13184425
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/8 mt-12 pt-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-gray-500 text-[12px]">
                &copy; {new Date().getFullYear()} EcomGarden. All Rights
                Reserved.
              </p>
              <div className="flex items-center gap-5">
                <Link
                  href="/privacy-policy"
                  className="text-gray-500 hover:text-gray-300 text-[12px] transition-colors"
                >
                  Privacy
                </Link>
                <Link
                  href="/terms"
                  className="text-gray-500 hover:text-gray-300 text-[12px] transition-colors"
                >
                  Terms
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-500 hover:text-gray-300 text-[12px] transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
