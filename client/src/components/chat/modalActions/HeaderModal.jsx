import React, { useContext } from 'react'
import { UserContext } from '../../../context/UserProvider';
import { Box, styled, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
const Header = styled(Box)`
    background: #008069;
    color: #FFFFFF;
    display: flex;
    margin-top: auto;
    padding: 15px;
    font-weight: 600;`;

const Text = styled(Typography)`
    font-size: 18px;`;

const btnStyle = {
  outline: "none",
  border: "none",
  background: "none",
  color: "white",
  cursor: "pointer",
};

const HeaderModal = ({ text }) => {
    const { setShare } = useContext(UserContext);
    return (
        <Header>
            <button onClick={() => setShare({ text: '',person: '',conversationId: '', open: false, choice: '',message: {} })} style={btnStyle}><CloseIcon /></button>
            <Text>{text}</Text>
        </Header>
    )
}

export default HeaderModal