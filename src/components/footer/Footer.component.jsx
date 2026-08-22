/**
 * @file Footer.component.jsx
 * @module Components/Footer
 * @description Luxury footer component featuring a quick contact form and navigation links.
 */

import React, { useState } from "react";
import { Crown, User, MessageSquare, Send } from "lucide-react";
import InputField from "../../utils/input-field/InputField.util.jsx";
import Button from "../../utils/button/Button.util.jsx";

const quickLinks = [
  { name: "About Us", href: "#" },
  { name: "Breeds", href: "#cats" },
  { name: "Care Guide", href: "#" },
  { name: "Contact", href: "#contact" },
];

const Footer = () => {
  // Contact Us Form State
  const [contactForm, setContactForm] = useState({
    name: "",
    message: "",
  });
  const [isSendingMessage, setIsSendingMessage] = useState(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactForm.message) return;

    setIsSendingMessage(true);
    setTimeout(() => {
      setIsSendingMessage(false);
      setContactForm({ name: "", message: "" });
    }, 1500);
  };

  return (
    <footer
      id="contact"
      className="relative bg-[#0F1410] text-[#E8E4DA] pt-16 pb-8 px-6 border-t border-[var(--secondary)]/30"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Contact Us Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          <div className="md:col-span-5 space-y-4 text-left">
            <div className="flex items-center gap-2 mb-2">
              <Crown
                className="w-5 h-5 text-[var(--secondary)]"
                strokeWidth={1.5}
              />
              <span className="font-serif text-xl font-bold tracking-wide text-white">
                THE FELINE GRACE
              </span>
            </div>
            <span className="text-xs font-semibold tracking-[0.2em] text-[var(--secondary)] uppercase block">
              Get In Touch
            </span>
            <h3 className="font-serif text-2xl md:text-3xl font-medium text-white">
              Send Us a Message
            </h3>
            <p className="text-xs md:text-sm text-white/60 font-light leading-relaxed">
              Have inquiries regarding our royal companions or private care
              consultations? Reach out to our concierge directly.
            </p>
          </div>

          <div className="md:col-span-7 flex items-center">
            <form onSubmit={handleContactSubmit} className="space-y-4 w-full">
              <InputField
                type="text"
                placeholder="Your Name"
                value={contactForm.name}
                onChange={(e) =>
                  setContactForm({ ...contactForm, name: e.target.value })
                }
                bgColor="rgba(255, 255, 255, 0.05)"
                textColor="#FFFFFF"
                icon={<User className="w-4 h-4 text-white/40" />}
                inputStyle={{
                  borderRadius: "0.75rem",
                  borderColor: "rgba(255, 255, 255, 0.15)",
                }}
              />

              <InputField
                type="text"
                placeholder="How can we assist you?"
                required
                value={contactForm.message}
                onChange={(e) =>
                  setContactForm({ ...contactForm, message: e.target.value })
                }
                bgColor="rgba(255, 255, 255, 0.05)"
                textColor="#FFFFFF"
                icon={<MessageSquare className="w-4 h-4 text-white/40" />}
                inputStyle={{
                  borderRadius: "0.75rem",
                  borderColor: "rgba(255, 255, 255, 0.15)",
                }}
              />

              <div className="flex justify-end">
                <Button
                  type="submit"
                  title="Send Message"
                  loading={isSendingMessage}
                  size="md"
                  icon={<Send className="w-3.5 h-3.5" />}
                  className="!rounded-xl !bg-[var(--secondary)] !text-[var(--primary)] hover:!bg-white text-xs uppercase font-semibold tracking-wider"
                />
              </div>
            </form>
          </div>
        </div>

        {/* Lower Section: Links & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-white/60">
          <ul className="flex flex-wrap justify-center gap-6 font-medium">
            {quickLinks.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  className="hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <p>© {new Date().getFullYear()} Feline Grace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
