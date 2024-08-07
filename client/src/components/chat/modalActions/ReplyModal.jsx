import React, { useContext, useState } from 'react'
import HeaderModal from './HeaderModal'
import { Box, styled, TextareaAutosize, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { UserContext } from '../../../context/UserProvider';
import { getSingleUser, newMessage } from '../../../service/api';
import { useGlobalContext } from '../../../context/AccountProvider';

const Footer = styled(Box)`
  display: flex;
  margin-top: auto;
  padding: 5px 15px;
  justify-content : flex-end;
  `;



const ReplyModal = () => {
  const { person, setShare, share } = useContext(UserContext);
  const { account, setNewMessageFlag } = useGlobalContext();
  const [inputValue, setInputValue] = useState('');
  // console.log(share);
  const sendReply = {
    outline: "none",
    border: "none",
    backgroundColor: inputValue === '' ? 'grey' : "#008069",
    color: inputValue === '' ? 'white' : 'white',
    cursor: inputValue === '' ? 'not-allowed' : 'pointer',
    borderRadius: "50%",
    width: "max-content",
    padding: "8px 10px",
    position: "relative",
    right: "10px",
  };


  const replyMessage = async () => {

    // const data = { senderId: account.sub, receiverId: id }
    const response = await getSingleUser({ sub: share.person });
    console.log(person);
    console.log(response);
    let message = {
      senderId: account.sub,
      receiverId: person.sub,
      conversationId: share.conversationId,
      type: 'text',
      text: inputValue,
      replyPerson: response.name,
      replyText: share.text
    };
    // console.log(message + " Message");

    await newMessage(message);

    setNewMessageFlag(prev => !prev);
    setShare({ text: '', person: '', conversationId: '', open: false, choice: '', message: {} });
  }



  return (
    <>
      <HeaderModal text={"Reply"} />
      <Box style={{ padding: "5px 15px", maxHeight: "350px", overflow: "scroll" }}>
      </Box>
      <Box style={{ display: "flex", justifyContent: "center" }}>
        {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" helperText="Write Reply Messsage"/> */}
        <TextField
          id="outlined-multiline-static"
          label="Reply Message"
          multiline
          rows={4}
          placeholder="Enter Reply message here"
          style={{ width: "90%" }}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        {/* <TextareaAutosize label="Outlined" rows={4}/> */}
      </Box>
      <Footer>
        <button type="button" onClick={() => replyMessage()} style={sendReply} disabled={inputValue === ''}>
          <SendIcon />
        </button>
      </Footer>
    </>
  )
}

export default ReplyModal