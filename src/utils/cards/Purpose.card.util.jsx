/**
 * @file PurposeCard.component.jsx
 * @module Components/PurposeCard
 * @description An elevated, interactive luxury card component featuring hover animations, dynamic shadows, and glowing accent transitions.
 */

import React from "react";
import { Crown, HeartHandshake, Sparkles } from "lucide-react";

/**
 * Icon mapping helper to render dynamic Lucide icons
 * @param {string} iconName - Name of the icon specified in constants
 */
const renderIcon = (iconName) => {
  const iconProps = {
    className:
      "w-7 h-7 text-[var(--secondary)] stroke-[1.25] transition-transform duration-500 group-hover:scale-110",
  };

  switch (iconName) {
    case "Crown":
      return <Crown {...iconProps} />;
    case "HeartHandshake":
      return <HeartHandshake {...iconProps} />;
    case "Sparkles":
      return <Sparkles {...iconProps} />;
    default:
      return <Sparkles {...iconProps} />;
  }
};

/**
 * PurposeCard Component
 * @param {Object} props
 * @param {Object} props.principle - Individual principle object containing title, description, and iconName
 */
const PurposeCard = ({ principle }) => {
  const { title, description, iconName } = principle;

  return (
    <div className="group relative flex flex-col items-center text-center p-8 md:p-10 rounded-3xl bg-[var(--tertiary)] border border-[var(--gray)]/60 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out max-w-sm mx-auto overflow-hidden">
      {/* Dynamic Ambient Background Glow on Hover */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--secondary)]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Subtle Top Accent Border on Hover */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-full h-[2px] bg-[var(--secondary)] transition-all duration-500 ease-out" />

      {/* Icon Container with Floating/Scale Effect */}
      <div className="relative z-10 mb-6 p-4 rounded-2xl bg-[var(--secondary)]/10 border border-[var(--secondary)]/20 shadow-inner group-hover:border-[var(--secondary)]/50 group-hover:bg-[var(--secondary)]/20 group-hover:shadow-[0_0_20px_rgba(197,160,89,0.25)] transition-all duration-500 flex items-center justify-center">
        {renderIcon(iconName)}
      </div>

      {/* Card Title */}
      <h3 className="relative z-10 font-serif text-2xl font-medium tracking-tight text-[var(--primary)] mb-3 group-hover:text-[var(--secondary)] transition-colors duration-300">
        {title}
      </h3>

      {/* Dynamic Expanding Gold Divider */}
      <div className="relative z-10 w-8 group-hover:w-16 h-[1.5px] bg-[var(--secondary)] mb-5 opacity-60 group-hover:opacity-100 transition-all duration-500 ease-out" />

      {/* Card Description */}
      <p className="relative z-10 text-sm md:text-base text-[var(--primary)]/80 font-light leading-relaxed group-hover:text-[var(--primary)] transition-colors duration-300">
        {description}
      </p>
    </div>
  );
}

export default PurposeCard