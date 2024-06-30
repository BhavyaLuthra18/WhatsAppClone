

import { Box,Typography,styled } from "@mui/material";

// Icons
import { CiSearch } from "react-icons/ci";
import { MdMoreVert } from "react-icons/md";


import React ,{useContext} from 'react';

import { AccountContext } from "../../../context/AccountProvider";
 
import { daytime } from "../../../utils/common-utils";

// Styling
const Header = styled(Box)`
height:44px;
background-color:#ededed;
padding: 8px 16px;
display:flex;
align-items:center;
`


const Image = styled('img')({
height:40,
width:40,
objectFit:"cover",
borderRadius:'50%'
})


const Name = styled(Typography)`
margin-left: 12px !important; 
`;


const Status = styled(Typography)`
margin-left: 12px !important; 
font-size:12px;
color: rgb(0,0,0,0.6)
`;


const RightContainer = styled(Box)`
margin-left:auto;
& > svg {
   padding: 8px;
   font-size: 24px;
   color:#000;
}
`



const ChatHeader = ({person}) => {


    // Checking for the active users  and setting the status as online offline
   const {activeUsers} = useContext(AccountContext);
   
    return (
        <Header>
         <Image src={person.picture} alt="dp" /> 
       <Box>
       <Name>{person.name}</Name>
       <Status>{activeUsers?.find(user => user.sub === person.sub) ? 'Online' :`Last seen    ${daytime()}`}</Status>
       </Box>
       <RightContainer>
        <CiSearch/>
        <MdMoreVert/>
         </RightContainer>
        </Header>
    )
}

export default ChatHeader;