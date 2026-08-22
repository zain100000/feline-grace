/**
 * @file Cats.component.jsx
 * @module Components/Cats
 * @description Renders all cat companions imported from constants using the CatCard utility component.
 */

import React from "react";
import PetCard from "../../utils/cards/Pets.card.util.jsx";
import { cats } from "../../constants/data.constant.hero.jsx";

const Pets = () => {
  return (
    <section id="pets" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[var(--secondary)]">
          Royal Lineage
        </span>
        <h2 className="font-serif text-3xl md:text-5xl font-bold text-[var(--primary)] tracking-tight">
          Our Exceptional Companions
        </h2>
        <div className="w-16 h-[2px] bg-[var(--secondary)] mx-auto my-4 rounded-full" />
        <p className="text-sm md:text-base text-[var(--primary)]/75 font-light leading-relaxed">
          Discover exceptionally bred felines raised with uncompromising care,
          timeless elegance, and distinguished heritage.
        </p>
      </div>

      {/* Grid Layout displaying all cats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
        {cats.map((cat) => (
          <PetCard key={cat.id} pet={cat} />
        ))}
      </div>
    </section>
  );
};

export default Pets;
