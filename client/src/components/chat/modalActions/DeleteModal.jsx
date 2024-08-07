import React , {useContext,useState}from 'react'
import HeaderModal from './HeaderModal'
import { Box, styled, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { UserContext } from '../../../context/UserProvider';
import { useGlobalContext } from '../../../context/AccountProvider';
import { deleteMessage, updateMessage } from '../../../service/api';

const Footer = styled(Box)`
  display: flex;
  margin-top: auto;
  padding: 5px 15px;
  justify-content : flex-end;
  `;
  const Text = styled(Typography)`
  font-size: 14px;
  padding: 10px 3px;
  border-radius : 5px;
  background : #dcf8c6;
  margin-bottom : 8px;
`;
const Head = styled(Typography)`
    font-size: 12px;
    color: grey;
    position: relative;
    top: 10px;
    left: 7px;`


const DeleteModal = () => {
  const { person, setShare, share } = useContext(UserContext);
  const { account, setNewMessageFlag } = useGlobalContext();
  const [inputValue, setInputValue] = useState(share.message.text);
  const sendEdit = {
    outline: "none",
    border: "none",
    backgroundColor: "#008069",
    color: 'white',
    cursor: 'pointer',
    width: "max-content",
    padding: "8px 10px",
    position: "relative",
    right: "10px",
  };


  const deleteMessageFunc = async () => {

    await deleteMessage({id: share.message._id})

    setNewMessageFlag(prev => !prev);
    setShare({ text: '', person: '', conversationId: '', open: false, choice: '', message: {} });
  }



  return (
    <>
      <HeaderModal text={"Delete"} />
      <Box style={{ padding : "10px",display: "flex", justifyContent: "center",flexDirection : "column",paddingTop: "0px" }}>
        <Head>text</Head>
        <Text>{share.text}</Text>
        <Typography>Are you sure you want to delete this message?</Typography>
      </Box>
      <Footer>
        <button type="button" onClick={() => deleteMessageFunc()} style={sendEdit} >
          OK
        </button>
      </Footer>
    </>
  )
}

export default DeleteModal