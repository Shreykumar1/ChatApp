
import { Box, styled, Typography } from '@mui/material'
import React from 'react'

const Component = styled(Box)`
    height: 45px;
    display: flex;
    padding: 13px 0;
    cursor: pointer;
`;
    
const Image = styled('img') ({
    width: 50,
    height: 50,
    objectFit: 'cover',
    borderRadius: '50%',
    padding: '0 14px'
});

const Container = styled(Box)`
    display: flex;
`;

const Text = styled(Typography)`
    display: block;
    color: rgba(0, 0, 0, 0.6);
    font-size: 14px;
`;

const SharePerson = ({user}) => {
  return (
    <Component >
    <Box>
        <Image src={user.picture} alt="display picture" />
    </Box>
    <Box style={{width: '100%'}}>
        {/* <Container> */}
            <Typography>{user.name}</Typography>
        {/* </Container> */}
    </Box>
</Component>
  )
}

export default SharePerson