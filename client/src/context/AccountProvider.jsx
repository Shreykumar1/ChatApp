import { createContext, useContext, useEffect, useState } from "react"

const AccountContext = createContext();

const AccountProvider = ({children}) => {
    const [account, setAccount] = useState();
    // useEffect(()=>{
    // const local = JSON.parse(localStorage.getItem('user'));
    // setAccount(local);
    // },[])
  return (
    <AccountContext.Provider value={{account, setAccount}}>{children}</AccountContext.Provider>
  )
}

export const useGlobalContext = () => {
    return useContext(AccountContext);
}

export { AccountProvider, AccountContext }

