import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./index.scss";
import App from "./App";
import Faq from "./pages/faq/Faq";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="faq" element={<Faq/>} />
    </Routes>
    </HashRouter>
  </React.StrictMode>
);
