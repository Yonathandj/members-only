import React from "react";
import ReactDOM from "react-dom/client";

import Router from "./router/router";
import AuthContext from "./contexts/AuthProvider";
import GlobalStateProvider from "./contexts/GlobalStateProvider";

import "./Main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContext>
      <GlobalStateProvider>
        <div className="mx-auto max-w-[1200px] p-6">
          <Router />
        </div>
      </GlobalStateProvider>
    </AuthContext>
  </React.StrictMode>,
);
