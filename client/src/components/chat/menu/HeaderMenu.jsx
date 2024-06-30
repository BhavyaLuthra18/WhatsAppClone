
import React,{ useState } from "react";

//Icon
import { MdMoreVert } from "react-icons/md";

import { Menu, MenuItem, styled } from "@mui/material";


// Styling
const MenuOption = styled(MenuItem)`
  font-size: 14px;
  padding: 15px 60px 5px 24px;
  color: #4a4a4a;
`;



const HeaderMenu = ({ setOpenDrawer }) => {

  const [open, setOpen] = useState(null);


  
  const handleClose = () => {
    setOpen(null);
  };

  const handleClick = (e) => {
    setOpen(e.currentTarget);
  };

  return (
    <>
      <MdMoreVert onClick={handleClick} />
      <Menu
        anchorEl={open}
        open={open}
        keepMounted // to open it below
        onClose={handleClose}
        getContentAnchorE1={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuOption
          onClick={() => {
            handleClose();
            setOpenDrawer(true);
          }}
        >
          Profile
        </MenuOption>
      </Menu>
    </>
  );
};

export default HeaderMenu;
