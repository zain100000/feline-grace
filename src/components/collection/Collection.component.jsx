/**
 * @file Collection.component.jsx
 * @module Components/Collection
 * @description Collection section displaying the first 3 featured companions from the cats constants data.
 */

import React from "react";
import { useNavigate } from "react-router-dom";
import CatCard from "../../utils/cards/Cat.card.util";
import { cats } from "../../constants/Cats.constant.hero";

const Collection = () => {
  const navigate = useNavigate();

  // Display only the first 3 cats from constants
  const featuredCats = cats.slice(0, 3);

  const handleViewAll = () => {
    navigate("/all-cats");
  };

  return (
    <section className="py-24 px-6 bg-[var(--tertiary)] flex flex-col items-center">
      <div className="max-w-6xl w-full mx-auto">
        {/* Header Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] text-[var(--secondary)] uppercase block mb-3">
              Featured Companions
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-medium text-[var(--primary)]">
              From the current collection
            </h2>
          </div>

          <button
            onClick={handleViewAll}
            className="mt-4 md:mt-0 text-xs font-semibold tracking-[0.15em] text-[var(--primary)] uppercase underline underline-offset-8 decoration-[var(--secondary)] hover:text-[var(--secondary)] transition-colors duration-300 bg-transparent border-none cursor-pointer"
          >
            View All
          </button>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCats.map((cat) => (
            <CatCard key={cat.id} cat={cat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collection