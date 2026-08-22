/**
 * @file Footer.component.jsx
 * @module Components/Footer
 * @description Luxury footer component featuring a newsletter subscription, quick links, social media channels, and an interactive Contact Us form.
 */

import React, { useState } from "react";
import {
  Crown,
  Mail,
  ArrowRight,
  User,
  MessageSquare,
  Send,
} from "lucide-react";
import InputField from "../../utils/input-field/InputField.util.jsx";
import Button from "../../utils/button/Button.util.jsx";

const InstagramIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TwitterIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const quickLinks = [
  { name: "About Us", href: "#" },
  { name: "Breeds", href: "#cats" },
  { name: "Care Guide", href: "#" },
  { name: "Contact", href: "#contact" },
];

const Footer = () => {
  // Newsletter State
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);

  // Contact Us Form State
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSendingMessage, setIsSendingMessage] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;

    setIsSubscribing(true);
    setTimeout(() => {
      setIsSubscribing(false);
      setNewsletterEmail("");
    }, 1500);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactForm.email || !contactForm.message) return;

    setIsSendingMessage(true);
    setTimeout(() => {
      setIsSendingMessage(false);
      setContactForm({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <footer
      id="contact"
      className="relative bg-[#0F1410] text-[#E8E4DA] pt-16 pb-8 px-6 border-t border-[var(--secondary)]/30"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Upper Section: Newsletter Banner */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/10">
          <div className="text-center md:text-left space-y-2">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Crown
                className="w-5 h-5 text-[var(--secondary)]"
                strokeWidth={1.5}
              />
              <span className="font-serif text-xl font-bold tracking-wide text-white">
                THE FELINE GRACE
              </span>
            </div>
            <p className="text-xs text-white/60 font-light">
              Subscribe for exclusive updates and bespoke care insights.
            </p>
          </div>

          <form
            onSubmit={handleNewsletterSubmit}
            className="flex items-center gap-2 w-full max-w-md"
          >
            <div className="flex-1">
              <InputField
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email"
                required
                bgColor="rgba(255, 255, 255, 0.05)"
                textColor="#FFFFFF"
                icon={<Mail className="w-4 h-4 text-white/40" />}
                inputStyle={{
                  borderRadius: "9999px",
                  borderColor: "rgba(255, 255, 255, 0.15)",
                }}
              />
            </div>
            <Button
              type="submit"
              title="Join"
              loading={isSubscribing}
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
              className="!rounded-full !bg-[var(--secondary)] !text-[var(--primary)] hover:!bg-white text-xs uppercase font-semibold tracking-wider"
            />
          </form>
        </div>

        {/* Middle Section: Contact Us Form */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          <div className="md:col-span-5 space-y-4 text-left">
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

          <div className="md:col-span-7">
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                  type="email"
                  placeholder="Your Email"
                  required
                  value={contactForm.email}
                  onChange={(e) =>
                    setContactForm({ ...contactForm, email: e.target.value })
                  }
                  bgColor="rgba(255, 255, 255, 0.05)"
                  textColor="#FFFFFF"
                  icon={<Mail className="w-4 h-4 text-white/40" />}
                  inputStyle={{
                    borderRadius: "0.75rem",
                    borderColor: "rgba(255, 255, 255, 0.15)",
                  }}
                />
              </div>

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

        {/* Lower Section: Links, Socials & Copyright */}
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

          <div className="flex gap-3">
            {[
              { icon: InstagramIcon, label: "Instagram" },
              { icon: FacebookIcon, label: "Facebook" },
              { icon: TwitterIcon, label: "Twitter" },
            ].map(({ icon: Icon, label }, idx) => (
              <a
                key={idx}
                href="#"
                aria-label={label}
                className="w-8 h-8 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/70 hover:text-[var(--secondary)] hover:border-[var(--secondary)] transition-colors duration-200"
              >
                <Icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>

          <p>© {new Date().getFullYear()} Feline Grace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
