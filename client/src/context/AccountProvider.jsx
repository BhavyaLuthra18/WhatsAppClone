import React, { createContext, useState, useRef, useEffect } from "react";
import { io } from "socket.io-client";

export const AccountContext = createContext(null);

const AccountProvider = ({ children }) => {
  const [account, setAccount] = useState();
  // users
  const [person, setPerson] = useState({});
  // active users
  const [activeUsers, setActiveUsers] = useState([]);
  // new Message
  const [newMessageFlag, setNewMessageFlag] = useState(false);

  const socket = useRef();

  useEffect(() => {
    socket.current = io("https://whats-app-clone-89x8.vercel.app/");
  }, []);

  return (
    <AccountContext.Provider
      value={{
        account,
        setAccount,
        person,
        setPerson,
        socket,
        activeUsers,
        setActiveUsers,
        newMessageFlag,
        setNewMessageFlag,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export default AccountProvider;
