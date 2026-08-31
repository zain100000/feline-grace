import React from "react";
import PetCard from "../utils/cards/Pets.card.util";
import { cats } from "../constants/data.constant.hero";

const AllPets = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <span className="text-xs font-semibold tracking-[0.2em] text-[var(--secondary)] uppercase block mb-3">
            Featured Companions
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-medium text-[var(--primary)]">
            From the current collection
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cats.map((pet) => (
          <PetCard key={pet.id} pet={pet} />
        ))}
      </div>
    </div>
  );
};

export default AllPets;
