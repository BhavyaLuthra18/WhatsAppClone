import React, { useContext, useState, useEffect } from "react";

import { Box } from "@mui/material";

import { AccountContext } from "../../../context/AccountProvider";

import { getConversation } from "../../../service/api";

// Components
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";

const ChatBox = () => {
  const { account, person } = useContext(AccountContext);

  const [conversation, setConversation] = useState({});

  // Getting Conversation Details
  useEffect(() => {
    const getConversationDetails = async () => {
      let data = await getConversation({
        senderId: account.sub,
        receiverId: person.sub,
      });
      // setting the Conservation for sender and receiver
      setConversation(data);
    };
    getConversationDetails();
  }, [person.sub]);

  return (
    <Box style={{ height: "75%" }}>
      <ChatHeader person={person} />
      <Messages person={person} conversation={conversation} />
    </Box>
  );
};

export default ChatBox;
