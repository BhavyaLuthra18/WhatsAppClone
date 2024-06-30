import React from "react";

import { GoogleOAuthProvider } from "@react-oauth/google";
import AccountProvider from "./context/AccountProvider.jsx";

import Messenger from "./components/Messenger.jsx";

function App() {
  const clientId =
    "320209266987-ec69ki9ctcpmt6svgklb3sq10opoc2ck.apps.googleusercontent.com";
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
