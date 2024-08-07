// MyDropdown.js
import React, { useContext, useState } from 'react';
import { Menu, MenuItem, Button } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { UserContext } from '../../../context/UserProvider';
const MyDropdown = ({text,person,conversationId}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const {setShare} = useContext(UserContext);
  const handleClick = (event) => {
      console.log(event.currentTarget);
      setAnchorEl(event.currentTarget);
    };

    const handleClose = (choice) => {
      console.log(choice);
      if(choice!==null){
      setShare({text : text, person: person, conversationId: conversationId, open : true, choice: choice});
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
      >
        <MenuItem onClick={()=>handleClose("share")}>Share</MenuItem>
        <MenuItem onClick={()=>handleClose("reply")}>Reply</MenuItem>
      </Menu>
    </div>
  );
};

export default MyDropdown;
