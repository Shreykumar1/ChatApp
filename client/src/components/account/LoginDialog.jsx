import { Dialog, Box, Typography, List, ListItem, styled } from '@mui/material'
import React from 'react'
import { qrCodeImage } from '../../assets/data'
import { GoogleLogin } from '@react-oauth/google'
import {jwtDecode} from 'jwt-decode'

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
  font-weight : 300;
  font-family : inherit;
  `
  
const QRCode = styled('img')({
  width: 264,
  height: 264,
  margin: '50px 0 0 50px',
})

const dialogStyle = {
    height : '96%',
    marginTop : '12%',
    width : '60%',
    maxWidth : '100%',
    maxHeight : '100%',
    boxShadow : 'none',
    overflow : 'none',
}

const LoginDialog = () => {
  const onLoginSuccess =  (res)=> {
    console.log(res);
    const token = res.credential;
    const decoded = jwtDecode(token);
    console.log(decoded);

  }
  const onLoginError =  ()=> {

  }
  return (
    <Dialog open={true} PaperProps={{sx : dialogStyle}}>
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