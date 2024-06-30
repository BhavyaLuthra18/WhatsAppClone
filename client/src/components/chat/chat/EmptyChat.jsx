
import {emptyChatImage} from "../../../constants/data";
import React from 'react';
import { Box,Typography,styled,Divider } from "@mui/material";

const Component = styled(Box)`
background : #f8f9fa;
padding: 30px 0;
text-align:center;
height:100vh;
display:flex;

justify-content: center;
`
const Container = styled(Box)`
padding: 0 200px
`

const Image = styled('img')({
    width:400,
    marginTop:100
})

const Title =styled(Typography)`
font-size:32px;
font-family:inherit;
font-weight: 300;
color:#41525d;
margin: 25px 0 10px 0;


`


const SubTitle = styled(Typography)`
font-size:14px;
color:#667781;
font-weight: 400;
font-family: inherit;
`

const StyledDivider = styled(Divider)`
margin: 40px 0 ;
opacity: 0.4;
`

const Emptychat = () =>{
return (
    <Component>
    <Container>
     <Image src={emptyChatImage} alt="image" />
     <Title>WhatsApp Web</Title>
     <SubTitle>Send and receive messages without keeping your phone online</SubTitle>
     <SubTitle>Use WhatsApp on up to 4 linked devices and 1 phone at the same time. </SubTitle>
     <StyledDivider/>
    </Container>

    </Component>
)
}


export default Emptychat;