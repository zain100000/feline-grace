// src/pages/AllCatsPage.jsx
import React from "react";
import Navbar from "../components/navbar/Navbar.component";
import Cats from "../components/cats/Cats.component";
import Footer from "../components/footer/Footer.component";

const AllCatsPage = () => {
  return (
    <div className="min-h-screen bg-[var(--tertiary)]">
      <Navbar />
      <main>
        <Cats />
      </main>
      <Footer />
    </div>
  );
};

export default AllCatsPage;
