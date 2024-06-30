
import React from "react";

import { Drawer, Box, Typography, styled } from "@mui/material";

import { FaArrowLeft } from "react-icons/fa";


// Components
import Profile from "./Profile";

// Styling
const Header = styled(Box)`
  background: #008069;
  height: 107px;
  color: #ffffff;
  display: flex;
  align-items: center;

  & > svg,
  & > p {
    font-weight: 600;
    padding: 15px;
  }

  & > svg {
    margin-right: 10px;
    cursor: pointer;
  }

  & > p {
    margin: 0;
  }
`;

const Component = styled(Box)`
  background: #ededed;
  height: 85%;
`;

const Text = styled(Typography)`
  font-size: 18px;
`;

const drawerStyle = {
  left: 20,
  top: 17,
  height: "95%",
  width: "30%",
  boxShadow: "none",
};

const InfoDrawer = ({ open, setOpen }) => {
  
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Drawer
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: drawerStyle }}
      style={{ zIndex: 1500 }}
    >
      <Header>
        <FaArrowLeft onClick={() => setOpen(false)} />
        <Text>Profile</Text>
      </Header>
      <Component>
        <Profile />
      </Component>
    </Drawer>
  );
};

export default InfoDrawer;
