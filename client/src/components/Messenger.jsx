import React, { useContext } from "react";

import { AppBar, Box, Toolbar, styled } from "@mui/material";

//Components
import LoginDialog from "./account/LoginDialog";
import ChatDialog from "./chat/ChatDialog";


import { AccountContext } from "../context/AccountProvider";


//Styling
const Component = styled(Box)`
  height: 100vh;
  background: #dcdcdc;
`;

const ChatHeader = styled(AppBar)`
  height: 125px;
  background-color: #00a884;
  box-shadow: none;
`;

const LoginHeader = styled(AppBar)`
  height: 220px;
  background-color: #00bfa5;
  box-shadow: none;
`;

const Messenger = () => {
  
  const { account } = useContext(AccountContext);

  return (
    <Component>
      {account ? (
        <>
          <ChatHeader>
            <Toolbar></Toolbar>
          </ChatHeader>
          <ChatDialog />
        </>
      ) : (
        <>
          <LoginHeader>
            <Toolbar></Toolbar>
          </LoginHeader>
          <LoginDialog />
        </>
      )}
    </Component>
  );
};

export default Messenger;
