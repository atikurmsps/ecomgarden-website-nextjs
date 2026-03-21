"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes, FaChevronDown, FaWhatsapp } from "react-icons/fa";

const services = [
  { name: "Amazon Wholesale", href: "/services/amazon-wholesale" },
  { name: "Amazon Arbitrage", href: "/services/amazon-arbitrage" },
  { name: "Walmart Management", href: "/services/walmart-management" },
  { name: "Shopify Development", href: "/services/shopify-development" },
  { name: "3PL Warehouse", href: "/services/3pl-warehouse" },
  { name: "Flat Rate Shipping", href: "/services/flat-rate-shipping" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "All Services", href: "/services", hasDropdown: true },
  { name: "Success Story", href: "/success-story" },
  { name: "Pricing", href: "/pricing" },
  { name: "FAQ", href: "/faq" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`bg-white sticky top-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-[0_2px_10px_rgba(0,0,0,0.08)]" : "shadow-[0_1px_4px_rgba(0,0,0,0.05)]"
      }`}
    >
      <div className="container-main">
        <div className="flex items-center justify-between" style={{ minHeight: "80px" }}>
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/images/logo.webp"
              alt="EcomGarden"
              width={220}
              height={80}
              className="w-auto"
              style={{ height: "60px" }}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <div key={link.name} className="relative group">
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1.5 text-[15px] font-semibold transition-colors relative ${
                      isActive ? "text-[#86af51]" : "text-[#020202] hover:text-[#86af51]"
                    }`}
                    style={{
                      padding: "28px 17px",
                      lineHeight: "1",
                    }}
                  >
                    {link.name}
                    {link.hasDropdown && <FaChevronDown className="text-[9px] ml-0.5" />}
                    {/* Active underline */}
                    {isActive && (
                      <span
                        className="absolute bottom-0 left-[17px] right-[17px] h-[3px] bg-[#86af51]"
                      />
                    )}
                  </Link>

                  {link.hasDropdown && (
                    <div className="absolute top-full left-0 bg-white shadow-lg py-2 min-w-[220px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border-t-[3px] border-[#86af51]">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="block px-5 py-2.5 text-[14px] text-[#333] hover:bg-[#86af51] hover:text-white transition-colors"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* WhatsApp CTA Button */}
          <a
            href="https://wa.link/m2ac6m"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-2 bg-[#da8040] text-white rounded-[4px] font-semibold hover:bg-[#c06e30] transition-colors text-[15px]"
            style={{ padding: "12px 24px" }}
          >
            <FaWhatsapp className="text-lg" />
            Quick Whatsapp
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-[#2b2e37] text-2xl p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-gray-100">
            <nav className="flex flex-col">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <div key={link.name}>
                    {link.hasDropdown ? (
                      <>
                        <button
                          className={`flex items-center justify-between w-full px-4 py-3 font-semibold transition-colors text-[16px] ${
                            isActive ? "text-[#86af51]" : "text-[#020202] hover:text-[#86af51]"
                          }`}
                          onClick={() => setServicesOpen(!servicesOpen)}
                        >
                          {link.name}
                          <FaChevronDown
                            className={`text-[10px] transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                          />
                        </button>
                        {servicesOpen && (
                          <div className="bg-gray-50 pl-8">
                            {services.map((service) => (
                              <Link
                                key={service.name}
                                href={service.href}
                                className="block px-4 py-2.5 text-sm text-[#333] hover:text-[#86af51] transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {service.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={link.href}
                        className={`block px-4 py-3 font-semibold transition-colors text-[16px] ${
                          isActive ? "text-[#86af51]" : "text-[#020202] hover:text-[#86af51]"
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                );
              })}
              <a
                href="https://wa.link/m2ac6m"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 mx-4 mt-3 bg-[#86af51] text-white px-5 py-3 rounded-[3px] font-semibold justify-center"
              >
                <FaWhatsapp className="text-lg" />
                Quick Whatsapp
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
