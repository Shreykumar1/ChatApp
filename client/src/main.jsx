import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AccountProvider } from './context/AccountProvider.jsx'
import UserProvider from './context/UserProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
    <AccountProvider>
      <App />
    </AccountProvider>
    </UserProvider>
  </React.StrictMode>,
)
