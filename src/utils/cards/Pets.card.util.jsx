/**
 * @file PetCard.util.jsx
 * @module utils/PetCard
 * @description Luxury card util displaying companion details with subtle shadow elevations, image zoom dynamics, and gold accents.
 */

import React from "react";

/**
 * PetCard util
 * @param {Object} props
 * @param {Object} props.pet - Individual pet data object from constants (cat or dog)
 */
const PetCard = ({ pet }) => {
  const { name, breed, origin, image, description, stats, tags } = pet;

  return (
    <div className="group relative flex flex-col bg-[#FAF8F5] rounded-3xl overflow-hidden border border-[#EBE7E0]/80 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 ease-out max-w-sm w-full mx-auto">
      {/* Dynamic Top Gold Highlight Bar on Hover */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[var(--secondary)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />

      {/* Image Container with Dark Gradient Overlay & Zoom */}
      <div className="relative h-72 w-full overflow-hidden bg-[#F4F1EA]">
        <img
          src={image}
          alt={`${name} - ${breed}`}
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content Body */}
      <div className="flex flex-col flex-1 p-6 md:p-8 text-left bg-white">
        {/* Breed Subtitle */}
        <span className="text-[10px] font-semibold tracking-[0.25em] text-[var(--secondary)] uppercase mb-1">
          {breed}
        </span>

        {/* Pet Name */}
        <h3 className="font-serif text-3xl font-medium text-[var(--primary)] mb-3 group-hover:text-[var(--secondary)] transition-colors duration-300">
          {name}
        </h3>

        {/* Description */}
        <p className="text-xs md:text-sm text-[var(--primary)]/75 font-light leading-relaxed mb-6 line-clamp-3">
          {description}
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-2 py-4 border-t border-b border-[#F0ECE1] mb-6 text-center bg-[#FAF8F5]/50 rounded-xl px-2">
          <div>
            <span className="block text-[9px] font-semibold tracking-wider text-[var(--primary)]/50 uppercase mb-1">
              Origin
            </span>
            <span className="block text-xs font-medium text-[var(--primary)] truncate">
              {origin}
            </span>
          </div>
          <div className="border-x border-[#F0ECE1] px-1">
            <span className="block text-[9px] font-semibold tracking-wider text-[var(--primary)]/50 uppercase mb-1">
              Weight
            </span>
            <span className="block text-xs font-medium text-[var(--primary)]">
              {stats?.weight}
            </span>
          </div>
          <div>
            <span className="block text-[9px] font-semibold tracking-wider text-[var(--primary)]/50 uppercase mb-1">
              Lifespan
            </span>
            <span className="block text-xs font-medium text-[var(--primary)]">
              {stats?.lifespan}
            </span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tags?.map((tag, idx) => (
            <span
              key={idx}
              className="text-[10px] uppercase tracking-wider font-medium text-[var(--primary)]/80 px-3 py-1 rounded-full border border-[#E8E4DA] bg-[#FAF8F5] transition-colors duration-300 group-hover:border-[var(--secondary)]/40"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Interactive Learn More Button
        <button className="relative overflow-hidden mt-auto w-full py-3.5 border border-[var(--secondary)] text-xs font-semibold tracking-[0.2em] text-[var(--primary)] uppercase transition-all duration-300 group-hover:bg-[var(--secondary)] group-hover:text-white group-hover:shadow-md">
          Learn More
        </button> */}
      </div>
    </div>
  );
};

export default PetCard;
