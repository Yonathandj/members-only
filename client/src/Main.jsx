import React from "react";
import ReactDOM from "react-dom/client";

import Router from "./router/router";

import "./Main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="max-w-[1200px] mx-auto">
      <Router />
    </div>
  </React.StrictMode>
);
