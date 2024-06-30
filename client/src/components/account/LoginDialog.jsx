import { Dialog, Box, Typography, List, ListItem, styled } from "@mui/material";

import { qrCodeImage } from "../../constants/data";

import { GoogleLogin } from "@react-oauth/google";

import { jwtDecode } from "jwt-decode";

import React, { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";

import { addUser } from "../../service/api";

//Styling
const Component = styled(Box)`
  display: flex;
`;

const Container = styled(Box)`
  padding: 56px 0px 56px 56px;
`;

const QRCode = styled("img")({
  height: 264,
  width: 264,
  margin: "50px 0 0 50px",
});

const dialogStyle = {
  height: "96%",
  marginTop: "12%",
  width: "68%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  overflow: "hidden",
  backgroundColor: "none",
};

const Title = styled(Typography)`
  font-size: 2rem;
  color: #525252;
  font-weight: 200;
  font-family: inherit;
  margin-bottom: 25px;
  margin-bottom: 0.2rem;
`;

const StyledList = styled(List)`
  & > li {
    padding: 0;
    margin-top: 15px;
    font-size: 18px;
    line-height: 28px;
  }
`;

const LoginDialog = () => {
  const { setAccount } = useContext(AccountContext);

  // on Login success
  const onLoginSuccess = async (res) => {
    const decoded = jwtDecode(res.credential);
    // setting the account of the decoded person
    setAccount(decoded);
    // adding the decoded User
    await addUser(decoded);
  };

  // on Login Error
  const onLoginError = (res) => {
    console.log("Login Failed", res);
  };

  return (
    <Dialog open={true} PaperProps={{ sx: dialogStyle }} hideBackdrop={true}>
      <Component>
        <Container>
          <Title>To use WhatsApp on computer:</Title>
          <StyledList>
            <ListItem>1. Open WhatsApp on your phone</ListItem>
            <ListItem>2. Tap Menu Settings and select WhatsApp Web</ListItem>
            <ListItem>
              3. Point your phone to this screen to capture the code
            </ListItem>
          </StyledList>
        </Container>
        <Box style={{ position: "relative" }}>
          <QRCode src={qrCodeImage} alt="Qr code" />
          <Box
            style={{
              position: "absolute",
              top: "50%",
              right: "22%",
              transform: "translate(25%)",
            }}
          >
            <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginError} />
          </Box>
        </Box>
      </Component>
    </Dialog>
  );
};

export default LoginDialog;
