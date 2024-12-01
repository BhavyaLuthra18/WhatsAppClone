import React from "react";

import { GoogleOAuthProvider } from "@react-oauth/google";
import AccountProvider from "./context/AccountProvider.jsx";

import Messenger from "./components/Messenger.jsx";

function App() {
  const clientId =
    "946174843077-jb2b6jjbroeg75c2cgs4o0uhvo0sd6u1.apps.googleusercontent.com";
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
