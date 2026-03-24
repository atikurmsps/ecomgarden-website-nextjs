"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes, FaChevronDown, FaWhatsapp } from "react-icons/fa";

const services = [
  {
    name: "Amazon Wholesale",
    href: "/services/amazon-wholesale",
    desc: "Full-service wholesale management",
  },
  {
    name: "Amazon Arbitrage",
    href: "/services/amazon-arbitrage",
    desc: "2-step dropshipping solutions",
  },
  {
    name: "Walmart Management",
    href: "/services/walmart-management",
    desc: "Complete store management",
  },
  {
    name: "Shopify Development",
    href: "/services/shopify-development",
    desc: "Custom store building",
  },
  {
    name: "3PL Warehouse",
    href: "/services/3pl-warehouse",
    desc: "Storage & fulfillment",
  },
  {
    name: "Flat Rate Shipping",
    href: "/services/flat-rate-shipping",
    desc: "Affordable shipping rates",
  },
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
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  return (
    <header
      style={{
        backgroundColor: "#fff",
        position: "sticky",
        top: 0,
        zIndex: 50,
        transition: "box-shadow 0.3s",
        boxShadow: scrolled
          ? "0 2px 20px rgba(0,0,0,0.08)"
          : "0 1px 3px rgba(0,0,0,0.04)",
      }}
    >
      <div className="container-main">
        <div
          className="flex items-center justify-between"
          style={{ height: "64px" }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/images/logo.webp"
              alt="EcomGarden"
              width={220}
              height={80}
              className="w-auto"
              style={{ height: "42px" }}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center"
            style={{ height: "64px" }}
          >
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <div
                  key={link.name}
                  className="relative group"
                  style={{ height: "100%" }}
                  ref={link.hasDropdown ? dropdownRef : undefined}
                >
                  <Link
                    href={link.href}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      padding: "0 16px",
                      height: "100%",
                      fontSize: "16px",
                      fontWeight: 600,
                      color: isActive
                        ? "var(--color-primary)"
                        : "var(--color-text)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                      position: "relative",
                    }}
                    className="hover:!text-primary"
                  >
                    {link.name}
                    {link.hasDropdown && (
                      <FaChevronDown
                        style={{
                          fontSize: "8px",
                          transition: "transform 0.2s",
                        }}
                      />
                    )}
                    {/* Active indicator */}
                    {isActive && (
                      <span
                        style={{
                          position: "absolute",
                          bottom: 0,
                          left: "16px",
                          right: "16px",
                          height: "3px",
                          backgroundColor: "var(--color-primary)",
                          borderRadius: "3px 3px 0 0",
                        }}
                      />
                    )}
                  </Link>

                  {/* Mega Dropdown */}
                  {link.hasDropdown && (
                    <div
                      style={{
                        position: "absolute",
                        top: "100%",
                        left: "-40px",
                        backgroundColor: "#fff",
                        boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
                        borderRadius: "0 0 12px 12px",
                        padding: "8px 0",
                        minWidth: "280px",
                        opacity: 0,
                        visibility: "hidden" as const,
                        transition: "all 0.2s ease",
                        borderTop: "3px solid var(--color-primary)",
                        zIndex: 50,
                      }}
                      className="group-hover:!opacity-100 group-hover:!visible"
                    >
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            padding: "10px 20px",
                            textDecoration: "none",
                            transition: "background 0.15s",
                          }}
                          className="hover:!bg-gray-50"
                        >
                          <span
                            style={{
                              fontSize: "15px",
                              fontWeight: 600,
                              color: "var(--color-text)",
                            }}
                          >
                            {service.name}
                          </span>
                          <span
                            style={{
                              fontSize: "13px",
                              color: "#999",
                              marginTop: "1px",
                            }}
                          >
                            {service.desc}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* CTA Button */}
          <a
            href="https://wa.link/m2ac6m"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent hidden lg:inline-flex"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "11px 24px",
              fontSize: "14px",
              animation: "none",
            }}
          >
            <FaWhatsapp style={{ fontSize: "16px" }} />
            Quick WhatsApp
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            style={{
              display: "none",
              padding: "8px",
              fontSize: "22px",
              color: "var(--color-text)",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
            className="!flex lg:!hidden items-center justify-center"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        style={{
          maxHeight: mobileMenuOpen ? "600px" : "0",
          overflow: "hidden",
          transition: "max-height 0.35s ease",
          borderTop: mobileMenuOpen ? "1px solid #f0f0f0" : "none",
        }}
        className="lg:!hidden"
      >
        <div style={{ padding: "8px 0 16px" }}>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <div key={link.name}>
                {link.hasDropdown ? (
                  <>
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "100%",
                        padding: "12px 20px",
                        fontSize: "16px",
                        fontWeight: 600,
                        color: isActive
                          ? "var(--color-primary)"
                          : "var(--color-text)",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        transition: "color 0.2s",
                      }}
                    >
                      {link.name}
                      <FaChevronDown
                        style={{
                          fontSize: "10px",
                          transition: "transform 0.2s",
                          transform: servicesOpen
                            ? "rotate(180deg)"
                            : "rotate(0)",
                        }}
                      />
                    </button>
                    <div
                      style={{
                        maxHeight: servicesOpen ? "400px" : "0",
                        overflow: "hidden",
                        transition: "max-height 0.3s ease",
                        backgroundColor: "#f9f9f9",
                      }}
                    >
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          style={{
                            display: "block",
                            padding: "10px 20px 10px 36px",
                            fontSize: "16px",
                            color: "#555",
                            textDecoration: "none",
                            transition: "color 0.2s",
                          }}
                          className="hover:!text-primary"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    style={{
                      display: "block",
                      padding: "12px 20px",
                      fontSize: "16px",
                      fontWeight: 600,
                      color: isActive
                        ? "var(--color-primary)"
                        : "var(--color-text)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    className="hover:!text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            );
          })}
          {/* Mobile CTA */}
          <div style={{ padding: "8px 16px 4px" }}>
            <a
              href="https://wa.link/m2ac6m"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                animation: "none",
                width: "100%",
              }}
            >
              <FaWhatsapp style={{ fontSize: "16px" }} />
              Quick WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
