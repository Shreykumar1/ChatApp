import { createContext, useState } from 'react';

export const UserContext = createContext(null);

const UserProvider = ({children}) => {

    const [ person, setPerson ] = useState({});
    const [ share, setShare ] = useState({text : '', open : false});
    
    return (
        <UserContext.Provider value={{ person, setPerson, share, setShare }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;