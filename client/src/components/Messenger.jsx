import React from 'react'
import LoginDialog from './account/LoginDialog'
import { AppBar,Toolbar, styled } from '@mui/material'

const Header = styled(AppBar)`
    height : 220px;
    background-color : #00bfa5;
    box-shadow : none `

const Messenger = () => {
    
  return (
    <div>
        <Header >
            <Toolbar />
        </Header>
        <LoginDialog />
    </div>
  )
}

export default Messenger