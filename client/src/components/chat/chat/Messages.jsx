import { useState, useEffect, useContext, useRef } from 'react';
import { Box, Dialog, styled } from '@mui/material';

import { io } from 'socket.io-client';

import Footer from './Footer';
import { useGlobalContext } from '../../../context/AccountProvider';
import { getMessage, newMessage } from '../../../service/api';
import Message from './Message';
import { UserContext } from '../../../context/UserProvider';
import ShareModal from '../modalActions/ShareModal';
import ModalsSelect from '../modalActions/ModalsSelect';

const Wrapper = styled(Box)`
    background-image: url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
    background-size: 50%;
`;


const Component = styled(Box)`
    height: 80vh;
    overflow-y: scroll;
`;

const Container = styled(Box)`
    padding: 1px 80px;
`;



const Messages = ({ person, conversation }) => {
    const { account, socket, newMessageFlag, setNewMessageFlag } = useGlobalContext();
    const {share} = useContext(UserContext);
    const [value, setValue] = useState('');
    const [messages, setMessages] = useState([]);
    const [file, setFile] = useState();
    const [image, setImage] = useState('');
    const [incomingMessage, setIncomingMessage] = useState(null);

    const scrollRef = useRef();

    useEffect(() => {
        socket.current.on('getMessage', data => {
            setIncomingMessage({ ...data, createdAt: Date.now() })
        })
    }, [])

    useEffect(() => {
        const getData = async () => {
            const data = await getMessage(conversation._id);
            setMessages(data);
        }
        getData();
        console.log(messages);
        
    }, [conversation?._id, person._id, newMessageFlag]);


    useEffect(() => {
        incomingMessage && conversation?.members?.includes(incomingMessage.senderId) &&
            setMessages((prev) => [...prev, incomingMessage]);
    }, [incomingMessage, conversation]);

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ transition: 'smooth' })
    }, [messages])

    const sendText = async (e) => {
        const code = e.keycode || e.which;
        if (code == 13) {
            let message = {}
            if (!file) {
                message = {
                    senderId: account.sub,
                    receiverId: person.sub,
                    conversationId: conversation._id,
                    type: 'text',
                    text: value
                }
            } else {
                message = {
                    senderId: account.sub,
                    receiverId: person.sub,
                    conversationId: conversation._id,
                    type: 'file',
                    text: image
                }
            }

            socket.current.emit('sendMessage', message)
            await newMessage(message);

            setValue('');
            setFile();
            setImage('');
            setNewMessageFlag(prev => !prev)
        }
    }

    return (
        <Wrapper>
            <Dialog open={share.open} maxWidth={'lg'} > 
                <ModalsSelect text={share.text} conversationId={conversation._id}/>
            </Dialog>
            <Component>
                {
                    messages && messages.map(message => (
                        <Container ref={scrollRef} key={message._id}>
                            <Message message={message} />
                        </Container>
                    ))
                }
            </Component>
            <Footer
                sendText={sendText}
                setValue={setValue}
                value={value}
                file={file}
                setFile={setFile}
                setImage={setImage}
            />
        </Wrapper>
    )
}

export default Messages;