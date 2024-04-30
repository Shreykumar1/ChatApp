import { useState, useEffect, useContext, useRef } from 'react';
import { Box, styled } from '@mui/material';

import Footer from './Footer';
import { useGlobalContext } from '../../../context/AccountProvider';
import { getMessage, newMessage } from '../../../service/api';
import Message from './Message';

const Wrapper = styled(Box)`
    background-image: url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
    background-size: 50%;
`;

const StyledFooter = styled(Box)`
    height: 55px;
    background: #ededed;
    // position: absolute;
    width: 100%;
    // bottom: 0
`;
    
const Component = styled(Box)`
    height: 80vh;
    overflow-y: scroll;
`;

const Container = styled(Box)`
    padding: 1px 80px;
`;



const Messages = ({person, conversation}) => {
    const {account} = useGlobalContext();
    const [value,setValue] = useState();
    const [messages, setMessages] = useState([]);
    const [newMessageFlag, setNewMessageFlag] = useState(false);
    const [file, setFile] = useState();
    const [image, setImage] = useState();
    const scrollRef = useRef();

    useEffect(()=>{
        const getData = async ()=>{
            const data = await getMessage(conversation._id);
            console.log(data);
            setMessages(data);
        }
        getData();
    },[conversation?._id, person._id, newMessageFlag])

    useEffect(()=>{
        scrollRef.current?.scrollIntoView({transition : 'smooth'})
    }, [messages])

    const sendText = async (e) => {
        const code = e.keycode || e.which ;
        if(code == 13){
            let message = {}
            if(!file){
                 message = {
                    senderId : account.sub,
                    receiverId : person.sub,
                    conversationId : conversation._id,
                    type : 'text',
                    text : value
                }
            }else{
                 message = {
                    senderId : account.sub,
                    receiverId : person.sub,
                    conversationId : conversation._id,
                    type : 'file',
                    text : image
                }
            }
            await newMessage(message);

            setValue('');
            setFile('');
            setImage('');
            setNewMessageFlag(prev => !prev)
        }
    }

    return (
        <Wrapper>
            <Component>
            {
                    messages && messages.map(message => (
                        <Container ref={scrollRef}>
                            <Message message={message} />
                        </Container>
                    ))
                }
            </Component>
            <Footer 
            sendText ={sendText}
            setValue ={setValue}
            value = {value}
            file = {file}
            setFile={setFile}
            setImage={setImage}
            />
        </Wrapper>
    )
}

export default Messages;