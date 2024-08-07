// MyDropdown.js
import React, { useContext, useEffect, useState } from 'react';
import { Menu, MenuItem, Button } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { UserContext } from '../../../context/UserProvider';
import { useGlobalContext } from '../../../context/AccountProvider';
const MyDropdown = ({text,person,conversationId,message}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const {account} = useGlobalContext();
  const [displayEdit, setDisplayEdit] = useState(false);
  const {setShare} = useContext(UserContext);
  useEffect(() => {
    checkDisplayEdit();
  }, []);
  const checkDisplayEdit = () => {
    const msgDate = new Date(message.createdAt)
    const nowDate = Date.now()
    const difference = Math.abs(nowDate - msgDate.getTime())
    const tenMinutesInMilliseconds = 10*60*1000;
    const isWithinTenMinutes = difference <= tenMinutesInMilliseconds;

    if(account.sub === person && isWithinTenMinutes){
      setDisplayEdit(true);
    }

  }
  const handleClick = (event) => {
      console.log(event.currentTarget);
      setAnchorEl(event.currentTarget);
    };

    const handleClose = (choice) => {
      console.log(choice);
      if(choice!==null){
      setShare({text : text, person: person, conversationId: conversationId, open : true, choice: choice ,message:message});
      }
      setAnchorEl(null);
  };

  const style = {
    padding: "0px",
    background : "none",
    border : "none",
    cursor : "pointer"}

  return (
    <div style={{maxWidth : "50px"}}>
      <button aria-controls="simple-menu" style={style} aria-haspopup="true" onClick={handleClick} >
        <KeyboardArrowDownIcon color='action' fontSize="small"/>
      </button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={()=>handleClose(null)}
        style={{fontSize : "13px"}}
      >
        <MenuItem onClick={()=>handleClose("share")} sx={{fontSize: "14px"}}>Share</MenuItem>
        <MenuItem onClick={()=>handleClose("reply")} sx={{fontSize: "14px"}}>Reply</MenuItem>
        {displayEdit && <MenuItem onClick={()=>handleClose("edit")} sx={{fontSize: "14px"}}>Edit</MenuItem>}
        {account.sub === person? <MenuItem onClick={()=>handleClose("delete")} sx={{fontSize: "14px"}}>Delete</MenuItem> : "" }
      </Menu>
    </div>
  );
};

export default MyDropdown;
