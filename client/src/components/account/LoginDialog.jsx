import { Dialog, Box, Typography, List, ListItem, styled } from '@mui/material'
import React from 'react'
import { qrCodeImage } from '../../assets/data'
import { GoogleLogin } from '@react-oauth/google'
import {jwtDecode} from 'jwt-decode'
import { useGlobalContext } from '../../context/AccountProvider'
import { addUser } from '../../service/api'

const Component = styled(Box)`
  display : flex;
`

const Container = styled(Box)`
  padding : 56px 0 56px 56px;
`

const StyledList = styled(Box)`
  & > li {
    padding : 0;
    margin-top : 15px;
    font-size  : 18px;
    line-height : 28px;
    color : #4a4a4a;
  }
`

const Title = styled(Typography)`
  font-size : 26px;
  color : #525252;
  margin-bottom: 25px;
  font-weight : 300;
  font-family: Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif;
  `
  // font-family : inherit;
  
const QRCode = styled('img')({
  width: 264,
  height: 264,
  margin: '50px 0 0 50px',
})

const dialogStyle = {
    height : '95%',
    marginTop : '12%',
    width : '60%',
    maxWidth : '100%',
    maxHeight : '100%',
    boxShadow : 'none',
    overflow : 'none',
}

const LoginDialog =  () => {
  const {setAccount} = useGlobalContext();
  const onLoginSuccess = async (res)=> {
    const decoded = jwtDecode(res.credential);
    console.log(decoded);
    setAccount(decoded);
    localStorage.setItem('user',JSON.stringify(decoded));
    await addUser(decoded)
  }
  const onLoginError = (res)=> {
    console.log('Login Error',res);
  }
  return (
    <Dialog open={true} PaperProps={{sx : dialogStyle}} hideBackdrop={true}>
        <Component>
            <Container>
                <Title>To use WhatsApp on your computer:</Title>
                <StyledList>
                  <ListItem>1. Open WhatsApp on your phone</ListItem>
                  <ListItem>2. Tap Menu or Settings and select Linked Devices</ListItem>
                  <ListItem>3. Point your phone to this screen to capture the code</ListItem>
                </StyledList>
            </Container>
            <Box style = {{position : 'relative'}}>
              <QRCode src={qrCodeImage} alt="QR_Code" />
              <Box style = {{position : 'absolute',top: '50%',transform : 'translateX(27%)'}}>
                <GoogleLogin 
                  onSuccess={onLoginSuccess}
                  onError={onLoginError}  
                />
              </Box>
            </Box>
        </Component>
    </Dialog>
  )
}

export default LoginDialog