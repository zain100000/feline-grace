/**
 * @file Purpose.component.jsx
 * @module Components/Purpose
 * @description Our Purpose section displaying company principles in a responsive, well-proportioned grid.
 */

import React from "react";
import PurposeCard from "../../utils/cards/Purpose.card.util";
import { purposeData } from "../../constants/Purpose.constant";

const Purpose = () => {
  return (
    <section className="py-20 px-6 bg-[var(--tertiary)] flex flex-col items-center">
      {/* Header Container */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-semibold tracking-[0.2em] text-[var(--secondary)] uppercase block mb-3">
          {purposeData.title}
        </span>
        <h2 className="font-serif text-3xl md:text-5xl font-medium text-[var(--primary)] mb-6">
          {purposeData.subtitle}
        </h2>
        <div className="w-16 h-[1px] bg-[var(--secondary)] mx-auto opacity-70" />
      </div>

      {/* Principles Grid - 1 Col on Mobile, 2 Col on Tablet/Medium, 3 Col on Desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full mx-auto justify-center">
        {purposeData.principles.map((principle, index) => {
          // Centers the 3rd card across both columns when on medium (2-column) screens
          const isLastOddItem =
            index === purposeData.principles.length - 1 &&
            purposeData.principles.length % 2 !== 0;

          return (
            <div
              key={principle.id}
              className={`w-full flex justify-center ${
                isLastOddItem ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <PurposeCard principle={principle} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Purpose;
