/**
 * @file Main.jsx
 * @module Main
 * @description Displays the main page content with navigation and hero carousel.
 * The carousel automatically cycles through slides every 5 seconds.
 */

import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar.component";
import HeroCarousel from "../../components/carousel/Carousel.component";
import Purpose from "../../components/purpose/Purpose.component";
import Collection from "../../components/collection/Collection.component";
import Footer from "../../components/footer/Footer.component";

const Main = () => {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate("/all-pets");
  };

  return (
    <div className="min-h-screen bg-[var(--tertiary)]" id="home">
      <Navbar />

      <main className="relative">
        <HeroCarousel onExplore={handleExplore} />
      </main>

      <section id="purpose" className="py-4 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <Purpose />
        </div>
      </section>

      {/* Collection Section - Now always shows featured cats */}
      <section className="px-6 py-4 bg-[var(--tertiary)] flex flex-col items-center">
        <div className="max-w-7xl mx-auto">
          <Collection />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Main;
