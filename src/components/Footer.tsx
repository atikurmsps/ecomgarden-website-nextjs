import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
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
    <footer style={{ backgroundColor: "#130f40" }} className="text-white">
      {/* Main Footer */}
      <div style={{ padding: "60px 0 40px" }}>
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Company Info */}
            <div>
              <Link href="/" className="inline-block mb-5">
                <Image
                  src="/images/logo.webp"
                  alt="EcomGarden"
                  width={200}
                  height={73}
                  className="w-auto brightness-200"
                  style={{ height: "50px" }}
                />
              </Link>
              <p className="text-gray-300 text-[14px] mb-4 leading-relaxed">
                Operated by Ekkid LLC (USA) and ITFLE LTD (UK). Your trusted
                partner for complete eCommerce management solutions.
              </p>
              <div className="flex gap-3 mt-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#86af51] transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="text-[13px]" />
                  </a>
                ))}
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-[17px] font-semibold mb-5 text-white">
                Company
              </h4>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-[#86af51] transition-colors text-[14px]"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-[17px] font-semibold mb-5 text-white">
                Services
              </h4>
              <ul className="space-y-3">
                {serviceLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-[#86af51] transition-colors text-[14px]"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-[17px] font-semibold mb-5 text-white">
                Contact Us
              </h4>
              <div className="space-y-4">
                <a
                  href="tel:+13072055481"
                  className="flex items-start gap-3 text-gray-300 hover:text-[#86af51] transition-colors text-[14px]"
                >
                  <FaPhoneAlt className="mt-1 text-[#86af51] flex-shrink-0 text-[13px]" />
                  +1 307 205 5481
                </a>
                <a
                  href="mailto:support@ecomgarden.com"
                  className="flex items-start gap-3 text-gray-300 hover:text-[#86af51] transition-colors text-[14px]"
                >
                  <FaEnvelope className="mt-1 text-[#86af51] flex-shrink-0 text-[13px]" />
                  support@ecomgarden.com
                </a>
                <div className="flex items-start gap-3 text-gray-300 text-[14px]">
                  <FaMapMarkerAlt className="mt-1 text-[#86af51] flex-shrink-0 text-[13px]" />
                  <span>30 North Gould Street, Sheridan, WY 82801, USA</span>
                </div>
                <div className="flex items-start gap-3 text-gray-300 text-[14px]">
                  <FaMapMarkerAlt className="mt-1 text-[#86af51] flex-shrink-0 text-[13px]" />
                  <span>
                    71-75 Shelton Street, London WC2H9JQ, UK
                    <br />
                    <span className="text-[12px] text-gray-400">
                      Company #13184425
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-main" style={{ padding: "18px 15px" }}>
          <p className="text-center text-gray-400 text-[13px]">
            &copy; {new Date().getFullYear()} EcomGarden. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
