import React from "react";
import ReactDOM from "react-dom/client";

import Router from "./router/router";
import AuthContext from "./context/AuthProvider";

import "./Main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContext>
      <div className="mx-auto max-w-[1200px] p-6">
        <Router />
      </div>
    </AuthContext>
  </React.StrictMode>,
);
