/**
 * @file Navbar.util.jsx
 * @module Components/Navbar
 * @description Responsive navigation bar with smooth animations, interactive tabs, and animated hamburger menu.
 */

import React, { useState, useEffect } from "react";
import Button from "../../utils/button/Button.util.jsx";
import logoImg from "../../assets/logo/logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("HOME");
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "HOME", href: "#home" },
    { name: "CATS", href: "#cats" },
    { name: "CONTACT", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-4 left-0 right-0 z-50 px-4 md:px-8 max-w-7xl mx-auto transition-all duration-300 ${
        isScrolled ? "top-2" : "top-4"
      }`}
    >
      {/* ================= DESKTOP & TABLET NAVBAR ================= */}
      <nav className="hidden md:flex items-center justify-between bg-[var(--tertiary)]/95 backdrop-blur-md rounded-full px-6 py-4 border border-[var(--gray)] shadow-lg hover:shadow-xl transition-all duration-300">
        {/* Logo Side */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <img
            src={logoImg}
            alt="The Feline Grace Logo"
            className="w-7 h-7 object-contain transition-transform duration-300 group-hover:scale-110"
          />
          <span className="font-serif text-xl font-medium tracking-tight text-[var(--primary)] transition-colors duration-300 group-hover:text-[var(--secondary)]">
            The Feline Grace
          </span>
        </a>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeTab === link.name;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveTab(link.name)}
                className={`relative text-sm font-semibold tracking-wider transition-all duration-300 ${
                  isActive
                    ? "text-[var(--secondary)]"
                    : "text-[var(--primary)] hover:text-[var(--secondary)]"
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 right-0 h-[2px] bg-[var(--secondary)] rounded-full transition-all duration-300 ${
                    isActive
                      ? "opacity-100 scale-x-100"
                      : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
                  }`}
                />
              </a>
            );
          })}
        </div>

        {/* CTA Button */}
        <div>
          <Button
            title="Buy Now"
            size="sm"
            onPress={() => console.log("Join the club clicked")}
            className="!rounded-full !border !border-[var(--secondary)] !bg-transparent !text-[var(--secondary)] !font-semibold !tracking-wider !px-5 !py-2 !text-xs !min-h-0 hover:!bg-[var(--secondary)] hover:!text-[var(--tertiary)] transition-all duration-300"
          />
        </div>
      </nav>

      {/* ================= MOBILE NAVBAR ================= */}
      <div className="block md:hidden">
        {/* Header Bar */}
        <div
          className={`flex items-center justify-between bg-[var(--tertiary)]/95 backdrop-blur-md rounded-full px-5 py-3 border border-[var(--gray)] shadow-lg transition-all duration-300 ${
            isMobileMenuOpen ? "rounded-b-none" : ""
          }`}
        >
          <a href="#home" className="flex items-center gap-2.5 group">
            <img
              src={logoImg}
              alt="The Feline Grace Logo"
              className="w-6 h-6 object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <span className="font-serif text-lg font-medium text-[var(--primary)] transition-colors duration-300 group-hover:text-[var(--secondary)]">
              The Feline Grace
            </span>
          </a>

          {/* Animated Hamburger Menu */}
          <button
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            className="relative w-8 h-8 flex items-center justify-center focus:outline-none"
          >
            <div className="relative w-6 h-5">
              {/* Top bar */}
              <span
                className={`absolute left-0 top-0 w-5 h-0.5 bg-[var(--primary)] rounded-full transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 top-2" : ""
                }`}
              />
              {/* Middle bar */}
              <span
                className={`absolute left-0 top-2 w-5 h-0.5 bg-[var(--primary)] rounded-full transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              {/* Bottom bar */}
              <span
                className={`absolute left-0 bottom-0 w-5 h-0.5 bg-[var(--primary)] rounded-full transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 bottom-2" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Animated Mobile Dropdown Menu */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-[var(--tertiary)]/95 backdrop-blur-md rounded-b-3xl p-5 border-x border-b border-[var(--gray)] shadow-lg">
            <div className="flex flex-col gap-4">
              {navLinks.map((link, index) => {
                const isActive = activeTab === link.name;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => {
                      setActiveTab(link.name);
                      closeMobileMenu();
                    }}
                    className={`text-sm font-semibold tracking-wider transition-all duration-300 hover:pl-2 ${
                      isActive
                        ? "text-[var(--secondary)]"
                        : "text-[var(--primary)] hover:text-[var(--secondary)]"
                    }`}
                    style={{
                      animation: isMobileMenuOpen
                        ? `slideIn 0.3s ease-out ${index * 0.1}s both`
                        : "none",
                    }}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>

            <div className="mt-4 pt-4 border-t border-[var(--gray)]">
              <Button
                title="Buy "
                size="md"
                width="100%"
                onPress={() => {
                  console.log("Join the club clicked");
                  closeMobileMenu();
                }}
                className="!rounded-full !border !border-[var(--secondary)] !bg-transparent !text-[var(--secondary)] !font-semibold !tracking-wider !text-xs hover:!bg-[var(--secondary)] hover:!text-[var(--tertiary)] transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Keyframe animations for mobile menu items */}
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
