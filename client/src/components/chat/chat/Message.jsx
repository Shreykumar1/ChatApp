import { useContext } from 'react';

import { Box, styled, Typography } from '@mui/material';
import { GetApp as GetAppIcon } from '@mui/icons-material';

import { AccountContext } from '../../../context/AccountProvider';

import {  formatDate } from '../../../utils/common-utils';

const Wrapper = styled(Box)`
    background: #FFFFFF;
    padding: 5px;
    max-width: 60%;
    width: fit-content;
    display: flex;
    border-radius: 10px;
    word-break: break-word;
`;
    
const Own = styled(Box)`
    background: #dcf8c6;
    padding: 5px;
    max-width: 60%;
    width: fit-content;
    margin-left: auto;
    display: flex;
    border-radius: 10px;
    word-break: break-word;
`;

const Text = styled(Typography)`
    font-size: 14px;
    padding: 0 25px 0 5px;
`;

const Time = styled(Typography)`
    font-size: 10px;
    color: #919191;
    margin-top: 6px;
    word-break: keep-all;
    margin-top: auto;
`;

const Message = ({ message }) => {
    const { account } = useContext(AccountContext);

    return (
        <>
        {
            account.sub === message.senderId ? 
                <Own>
                    <TextMessage message={message} />
                </Own>
            : 
                <Wrapper>
                    <TextMessage message={message} />
                </Wrapper>
        }
        
        </>
    )
}

const TextMessage = ({ message }) => {
    
    return (
        <>
            <Text>{message.text}</Text>
            <Time>{formatDate(message.createdAt)}</Time>
        </>
    )
}

export default Message