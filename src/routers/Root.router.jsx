/**
 * @file Root.router.jsx
 * @module Navigation/Root
 * @description The root provider architecture that initializes routing for the application.
 */

import { Routes, Route } from "react-router-dom";
import AppRouter from "./App.router.jsx";

const RootNavigator = () => {
  return (
    <Routes>
      <Route path="/*" element={<AppRouter />} />
    </Routes>
  );
};

export default RootNavigator;
