/**
 * @file AppRouter.jsx
 * @module Navigation/App
 * @description Central routing engine for the application using React Router v6. Handles public access, account recovery, and error fallback routes.
 */

import { Routes, Route } from "react-router-dom";
import Main from "../screens/main/Main";
import Cats from "../components/cats/Cats.component";

const AppRouter = () => {
  return (
    <Routes>
      {/* Public Route */}
      <Route path="/" element={<Main />} />
      <Route path="/all-cats" element={<Cats />} />
    </Routes>
  );
};

export default AppRouter;
