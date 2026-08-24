/**
 * @file AppRouter.jsx
 * @module Navigation/App
 * @description Central routing engine for the application using React Router v6. Handles public access, account recovery, and error fallback routes.
 */

import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Main from "../screens/main/Main";
import AllPets from "../pages/AllPets.page";
import BuyNow from "../pages/BuyNow";

const AppRouter = () => {
  const { pathname } = useLocation();

  // Jab bhi route/screen change hoga, page top par scroll ho jayega
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      {/* Public Route */}
      <Route path="/" element={<Main />} />
      <Route path="/all-pets" element={<AllPets />} />
      <Route path="/buy-now" element={<BuyNow />} />
    </Routes>
  );
};

export default AppRouter;
