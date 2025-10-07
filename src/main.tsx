import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import FacebookPixel from "./components/FacebookPixel";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FacebookPixel />
    <App />
  </React.StrictMode>
);
