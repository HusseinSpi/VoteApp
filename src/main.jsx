import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AppMenu } from "./Context/MenuContext.jsx";
import { AccountProvider } from "./Context/AccountContext.jsx";
import { UserVoteProvider } from "./Context/UserVote.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AccountProvider>
      <UserVoteProvider>
        <AppMenu>
          <App />
        </AppMenu>
      </UserVoteProvider>
    </AccountProvider>
  </React.StrictMode>
);
