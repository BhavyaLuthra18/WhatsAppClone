import { Dialog,Box ,styled} from "@mui/material";

import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";
import React from 'react'; 
  // Components
  import Menu from "./menu/Menu";

import Emptychat from "./chat/EmptyChat";
import ChatBox from "./chat/ChatBox";


   const Component = styled(Box)`
   display:flex;
   `

  const LeftComponent = styled(Box)`
   min-width:450px;
  `

  const RightComponent = styled(Box)`
  width:73%;
  min-width:300px;
  height:100%;
  border-left: 1px solid rgba(0,0,0,0.14);
  `

  const dialogStyle = {
    height:'95%',
    width: '100%',
    margin:'20px',
    maxWidth:'100%',
    borderRadius:0,
    maxHeight:'100%',
    boxShadow:'none',
    overflow:'hidden'
  }




const ChatDialog = () => {
  const {person} = useContext(AccountContext);

return (
  <Dialog
  open={true}
  PaperProps={{sx: dialogStyle}}
  hideBackdrop={true}
  maxWidth={'md'}
  >
    <Component>
        <LeftComponent>
            <Menu/>
        </LeftComponent>
        <RightComponent>
    {Object.keys(person).length ? <ChatBox/> : <Emptychat/>}
        </RightComponent>
    </Component>


  </Dialog>
)
}

export default ChatDialog;