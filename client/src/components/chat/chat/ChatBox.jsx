import { useContext, useState, useEffect } from 'react';

import { Box } from '@mui/material';

import { AccountContext } from '../../../context/AccountProvider';

//components
import ChatHeader from './ChatHeader';
import Messages from './Messages';

const ChatBox = () => {
    const { account } = useContext(AccountContext);
    

    const [conversation, setConversation] = useState({});

    return (
        <Box style={{height: '75%'}}>
            <ChatHeader person={account} />
            <Messages />
        </Box>
    )
}

export default ChatBox;