import { Box, Button, Checkbox, Divider, FormControlLabel, FormGroup, styled, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../../context/UserProvider'
import { getAllUsers, getConversation, newMessage } from '../../../service/api';
import { useGlobalContext } from '../../../context/AccountProvider';
import SharePerson from './SharePerson';
import { Padding } from '@mui/icons-material';
import HeaderModal from './HeaderModal';


const Footer = styled(Box)`
      display: flex;
      margin-top: auto;
      padding: 5px 15px;
      justify-content : flex-end;
  `;


const StyledDivider = styled(Divider)`
  background-color: #e9edef;
  opacity: .6;
`;





const ShareModal = ({ text, conversationId }) => {
    const { person, setShare, share } = useContext(UserContext);
    const { account, setNewMessageFlag } = useGlobalContext();
    const [users, setUsers] = useState([]);
    const [checked, setChecked] = useState({});

    const isEmpty = (obj) => {
        return Object.keys(obj).length === 0;
    };
    const sendBtn = {
        outline: "none",
        border: "none",
        backgroundColor: isEmpty(checked)?"grey": "#008069",
        cursor: isEmpty(checked)?"not-allowed": "pointer",
        borderRadius: "50%",
        width: "max-content",
        padding: "8px 10px",
        color: "white",
        position: "relative",
        right: "10px",
      };

    const handleChange = (event) => {
        setChecked({
            ...checked,
            [event.target.name]: event.target.checked,
        });
    };

    useEffect(() => {
        const getData = async () => {
            const data = await getAllUsers();
            setUsers(data);
        }
        getData();
    }, []);

    const shareMessage = async () => {
        console.log(checked);
        // const id = '65fac6e1ede1e736014a0093'
        const keys = Object.keys(checked).filter(key => checked[key]);
        console.log(keys);
        for (const id of keys) {
            const data = { senderId: account.sub, receiverId: id }
            const response = await getConversation(data)
            console.log(response);
            let message = {
                senderId: account.sub,
                receiverId: id,
                conversationId: response._id,
                type: 'text',
                text: text
            };
            console.log(message + " Message");

            await newMessage(message);
        }


        setNewMessageFlag(prev => !prev)
    }

    const areAllValuesFalse = (checked) => {
        return Object.values(checked).every(value => value === false);
    };



    return (
        <>
            <HeaderModal text={"Share message to"} />
            <Box style={{ padding: "5px 15px", maxHeight: "350px", overflow: "scroll" }}>
                <FormGroup>
                    {
                        users && users.map((user) => {
                            if (user.sub === account.sub) {
                                return null
                            }
                            const key = user.sub;
                            return <div key={key}>
                                <FormControlLabel key={key} control={<Checkbox checked={checked[key]} onChange={handleChange} name={key} />} label={<SharePerson user={user} />} />
                                <StyledDivider />
                            </div>
                        })
                    }
                </FormGroup>
            </Box>
            <Footer>
                <button type="button" onClick={() => shareMessage()} style={sendBtn} disabled={areAllValuesFalse(checked)}>
                    <SendIcon />
                </button>
            </Footer>
        </>
    )
}

export default ShareModal