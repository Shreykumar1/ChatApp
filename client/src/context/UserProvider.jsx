import { createContext, useState } from 'react';

export const UserContext = createContext(null);

const UserProvider = ({children}) => {

    const [ person, setPerson ] = useState({});
    const [ share, setShare ] = useState({text : '',person: '',conversationId: '', open : false,choice: ''});
    
    return (
        <UserContext.Provider value={{ person, setPerson, share, setShare }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;