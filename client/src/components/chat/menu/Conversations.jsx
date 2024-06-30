import { useEffect ,useState ,useContext } from "react";
import { getUsers } from "../../../service/api";
import { Box ,styled, Divider } from "@mui/material";
import React from 'react';
import Conversation from "./Conversation";
import { AccountContext } from "../../../context/AccountProvider";


const Component = styled(Box)`
height:81vh,
overflow:overlay
`

const StyledDivider = styled(Divider)`
margin: 0 0 0 70px;
background-color: #e9edef;
opacity:.6;
`




const Conversations = ({text}) => {

   const [users, setUsers] = useState([]);
   const {account,socket,setActiveUsers} = useContext(AccountContext);

    useEffect(() => {
       const fetchData = async () => {
     let response =  await getUsers();
     if (response){
      const filterData = response.filter(user => user.name.toLowerCase().includes(text.toLowerCase()))
      setUsers(filterData);
     }
   

       }
       fetchData();
    },[text])


      // add usr in socket.io 
     useEffect(() => {
    socket.current.emit('addUsers',account);
   socket.current.on("getUsers" ,users => {
      setActiveUsers(users)
   })
     },[account])




    return (
      <Component>
     {
        users.map(user => (
            // user log in should be same as that conv 
            user.sub !== account.sub &&
            <>
            <Conversation user={user}/>
            <StyledDivider/>
            </>

        ))
     }
      </Component>
    )
}


export default Conversations;




