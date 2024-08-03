// MyModal.js
import React, { useState } from 'react';
import { Modal, Box, Button, Typography } from '@mui/material';

const MyModal = ({openModal, handleClose}) => {


//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpenModal(false);

  const style = {
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300, // Adjust the width as needed
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open Modal</Button> */}
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-title" variant="h6" component="h2">
            Share or Reply
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            Here you can add share and reply options.
          </Typography>
          <Button onClick={handleClose}>Close</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default MyModal;
