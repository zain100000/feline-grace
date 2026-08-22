/**
 * @file main.jsx
 * @module EntryPoint
 * @description The application entry point that sets up React root rendering with Strict Mode, BrowserRouter for routing, and global styles.
 */

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import RootNavigator from "./routers/Root.router";
import "./styles/global.styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <RootNavigator />      
    </BrowserRouter>
  </React.StrictMode>,
);
