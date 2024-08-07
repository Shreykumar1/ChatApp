import React, { useContext, useState } from 'react'
import HeaderModal from './HeaderModal'
import { Box, styled, TextareaAutosize, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { UserContext } from '../../../context/UserProvider';
import { useGlobalContext } from '../../../context/AccountProvider';
import { updateMessage } from '../../../service/api';

const Footer = styled(Box)`
  display: flex;
  margin-top: auto;
  padding: 5px 15px;
  justify-content : flex-end;
  `;



const EditModal = () => {
  const { person, setShare, share } = useContext(UserContext);
  const { account, setNewMessageFlag } = useGlobalContext();
  const [inputValue, setInputValue] = useState(share.message.text);
  const sendEdit = {
    outline: "none",
    border: "none",
    backgroundColor: inputValue === ''||inputValue===share.message.text ? 'grey' : "#008069",
    color: 'white',
    cursor: inputValue === ''||inputValue===share.message.text ? 'not-allowed' : 'pointer',
    borderRadius: "50%",
    width: "max-content",
    padding: "8px 10px",
    position: "relative",
    right: "10px",
  };


  const editMessage = async () => {

    await updateMessage({id: share.message._id,text: inputValue})

    setNewMessageFlag(prev => !prev);
    setShare({ text: '', person: '', conversationId: '', open: false, choice: '', message: {} });
  }



  return (
    <>
      <HeaderModal text={"Edit"} />
      <Box style={{ padding: "5px 15px", maxHeight: "350px", overflow: "scroll" }}>
      </Box>
      <Box style={{ display: "flex", justifyContent: "center" }}>
        <TextField
          id="outlined-multiline-static"
          label="Edit Message"
          multiline
          rows={4}
          placeholder="Edit message here"
          style={{ width: "90%" }}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </Box>
      <Footer>
        <button type="button" onClick={() => editMessage()} style={sendEdit} disabled={inputValue === ''||inputValue===share.message.text}>
          <SendIcon />
        </button>
      </Footer>
    </>
  )
}

export default EditModal