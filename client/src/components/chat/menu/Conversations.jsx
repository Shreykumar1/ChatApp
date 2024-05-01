import React, { useEffect, useState } from 'react'
import { getAllUsers } from '../../../service/api'
import { Box, styled, Divider } from '@mui/material';
import { useGlobalContext } from '../../../context/AccountProvider';
import Conversation from './Conversation';

const Component = styled(Box)`
    overflow: overlay;
    height: 81vh;
`;

const StyledDivider = styled(Divider)`
    margin: 0 0 0 70px;
    background-color: #e9edef;
    opacity: .6;
`;

const Conversations = () => {
    const [users,setUsers] = useState([]);

    const { account, socket, setActiveUsers } = useGlobalContext();
    useEffect( ()=>{
        const getData = async() =>{
            const data = await getAllUsers();
            setUsers(data);
        }
        getData();
    },[]);

    useEffect(()=>{
        socket.current.emit('addUsers', account);
        socket.current.on('getUsers',users => {
            setActiveUsers(users);
        },[account])
    })
  return (
    <Box>
            {
                users && users.map((user, index) => {
                    if(user.sub === account.sub){
                     return null
                    } 
                       return  <div key={index}>
                             <Conversation user={user} />
                             {
                                 users.length !== (index + 1)  && <StyledDivider />
                             }
                         </div>
                 })
            }
    </Box>
  )
}

export default Conversations