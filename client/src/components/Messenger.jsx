import React from 'react'
import LoginDialog from './account/LoginDialog'
import { AppBar,Box,Toolbar, styled } from '@mui/material'

const Header = styled(AppBar)`
    height : 220px;
    background-color : #00bfa5;
    box-shadow : none `

const Component = styled(Box)`
    height : 100ch;
    background-color : #DCDCDC;
    `

const Messenger = () => {
    
  return (
    <Component>
        <Header >
            <Toolbar />
        </Header>
        <LoginDialog />
    </Component>
  )
}

export default Messenger