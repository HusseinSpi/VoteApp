import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AppMenu } from "./Context/MenuContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppMenu>
      <App />
    </AppMenu>
  </React.StrictMode>
);
