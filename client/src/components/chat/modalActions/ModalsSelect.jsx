import React, { useContext } from 'react'
import { UserContext } from '../../../context/UserProvider';
import ReplyModal from './ReplyModal';
import EditModal from './EditModal';
import ShareModal from './ShareModal';
import { Box, styled } from '@mui/material';

const Container = styled(Box)`
    width : 310px`


const ModalsSelect = ({text, conversationId}) => {
    const { person, setShare, share } = useContext(UserContext);
    const {choice} = share;
  return (
    <Container>
      {choice === "share" ? (
        <ShareModal text={share.text} conversationId={conversationId} />
      ) : choice === "reply" ? (
        <ReplyModal />
      ) : (
        <EditModal />
      )}
    </Container>
  );
}

export default ModalsSelect