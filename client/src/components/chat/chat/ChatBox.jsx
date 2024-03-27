import { useContext, useState, useEffect } from 'react';

import { Box } from '@mui/material';

import { AccountContext } from '../../../context/AccountProvider';
import { UserContext } from '../../../context/UserProvider';

//components
import ChatHeader from './ChatHeader';
import Messages from './Messages';
import { getConversation } from '../../../service/api';

const ChatBox = () => {
    const { account } = useContext(AccountContext);
    const { person } = useContext(UserContext);
    const [conversation, setConversation] = useState({});


    useEffect(()=>{
        const getConversationDetails = async () => {
            const response = await getConversation({senderId :account.sub,receiverId : person.sub});
            console.log(response);
            setConversation(response)
        }
        getConversationDetails();
    },[person.sub])



    return (
        <Box style={{height: '75%'}}>
            <ChatHeader person={person} />
            <Messages person={person} conversation={conversation}/>
        </Box>
    )
}

export default ChatBox;