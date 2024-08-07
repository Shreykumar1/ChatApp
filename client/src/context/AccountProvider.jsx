import { createContext, useContext, useEffect, useState, useRef } from "react"

import { io } from 'socket.io-client'

const AccountContext = createContext();

const AccountProvider = ({children}) => {
    const [account, setAccount] = useState(null);
    const [activeUsers, setActiveUsers] = useState([]);
    const [newMessageFlag, setNewMessageFlag] = useState(false);
    // useEffect(()=>{
    // const local = JSON.parse(localStorage.getItem('user'));
    // setAccount(local);
    // },[])
    const socket = useRef();
    useEffect(()=>{
      console.log(account);
      socket.current = io('ws://localhost:9000')
    },[])

   return (
     <AccountContext.Provider value={{account, setAccount, socket, activeUsers, setActiveUsers, newMessageFlag, setNewMessageFlag}}>{children}</AccountContext.Provider>
   )
}

export const useGlobalContext = () => {
    return useContext(AccountContext);
}

export { AccountProvider, AccountContext }

