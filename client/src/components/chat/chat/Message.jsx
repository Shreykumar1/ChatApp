import { useContext, useState } from 'react';

import { Box, Drawer, styled, Typography } from '@mui/material';
import { GetApp as GetAppIcon } from '@mui/icons-material';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';


import { AccountContext } from '../../../context/AccountProvider';

import {  downloadMedia, formatDate } from '../../../utils/common-utils';
import {  iconPDF } from '../../../constants/data';
import MyModal from './MyModal';
import MyDropdown from './MyDropdown';

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
        {/* {openModal&&<MyModal openModal={openModal} handleClose={handleClose}/>} */}
        {   
            account.sub === message.senderId ? 
                <Own>
                    {
                        message.type === "file" ? <ImageMessage message={message}/> : <TextMessage message={message} />
                    }
                </Own>
            : 
                <Wrapper>
                    {
                        message.type === "file" ? <ImageMessage message={message}/> : <TextMessage message={message} />
                    }
                </Wrapper>
        }
        
        </>
    )
}


const TextMessage = ({ message }) => {
    // const [openModal, setOpenModal] = useState(false);

    const handleClose = () => setOpenModal(false);
    return (
      <>
        <Text>{message.text}</Text>
        <Time>{formatDate(message.createdAt)}</Time>
        {/* <Dialog fullWidth={'xs'} maxWidth={'xs'} open={open} onClose={handleClose}>
          Share1
        </Dialog> */}
        <MyDropdown text={message.text}  />
      </>
    );
}

const ImageMessage = ({message}) => {
    return (
        <Box style={{position : 'relative'}}>
            {
                (message?.text?.includes('.pdf') || message?.text?.includes('.txt') )?
                <Box style={{display : 'flex'}}>
                    <img src={iconPDF} alt="pdf" style={{width : 80}} />
                    <Typography fontSize={14}>{message.text.split('/').pop()}</Typography>
                </Box>
                :
                <img src={message.text} alt={message.text} width="200px"/>
            }
            <Time style={{position : 'absolute', bottom : 0, right : 0}}>
                <GetAppIcon 
                onClick = {(e)=> downloadMedia(e,message.text)}
                style={{marginRight : 10, border : '1px solid grey', borderRadius : '50%'}} fontSize='small'/>
                {formatDate(message.createdAt)}</Time>

        </Box>
    )
}

export default Message