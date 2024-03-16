import React from 'react'
import LoginDialog from './account/LoginDialog'
import { AppBar,Toolbar } from '@mui/material'

const Messenger = () => {
  return (
    <div>
        <AppBar >
            <Toolbar />
        </AppBar>
        <LoginDialog />
    </div>
  )
}

export default Messenger