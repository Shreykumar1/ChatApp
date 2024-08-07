import { useEffect, useState } from 'react';
import { EmojiEmotions, AttachFile, Mic } from '@mui/icons-material';
import { Box, styled, InputBase } from '@mui/material';
import { uploadFile } from '../../../service/api';
import EmojiPicker from 'emoji-picker-react';


const Container = styled(Box)`
    height: 55px;
    background: #ededed;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 15px;
    &  > * {
        margin: 5px;
        color: #919191;
    }
`;

const Search = styled(Box)`
    border-radius: 18px;
    background-color: #FFFFFF;
    width: calc(94% - 100px);
`;

const InputField = styled(InputBase)`
    width: 100%;
    padding: 20px;
    padding-left: 25px;
    font-size: 14px;
    height: 20px;
    width: 100%;
`;

const ClipIcon = styled(AttachFile)`
    transform: 'rotate(40deg)'
`;


const Footer = ({sendText, setValue, value, file, setFile, setImage}) => {
    const [emojiOpen,setEmojiOpen] = useState(false);
    useEffect(()=>{
        const getImage = async ()=> {
        if(file){
            const data = new FormData();
            data.append('name',file.name);
            data.append('file',file);
            let response = await uploadFile(data);
            console.log(response);
            setImage(response.data)
        }
    }
    getImage();
    },[file])

    const onFileChange = (e) => {
        console.log(e);
        setFile(e.target.files[0])
        setValue(e.target.files[0].name)
    }
    const handleEmojiClick = (emojiObject,event) => {
        console.log(emojiObject);
        setValue((prevMessage) => prevMessage + emojiObject.emoji);
      };
      const emojiStyle = {
        height: "350px",
        width: "300px",
        position: "absolute",
        bottom: "50px",
        left: "-5.5px",
      }

    return (
        <Container style={{position: "relative"}}>
            {emojiOpen &&<EmojiPicker onEmojiClick={handleEmojiClick} style={emojiStyle}/>}
            <button style={{border: "none",background:"none",cursor:"pointer"}} onClick={()=>setEmojiOpen(!emojiOpen)}><EmojiEmotions style={{color: emojiOpen ?"#007700":"grey"}}/></button>
            <label htmlFor="fileInput">
                <ClipIcon />
            </label>
            <input
                type='file'
                id="fileInput"
                style={{ display: 'none' }}
                onChange={(e)=>onFileChange(e)}
            />
            <Search>
            <InputField
                    placeholder="Type a message"
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={(e) => sendText(e)}
                    value={value}
                />
            </Search>
            <Mic />
        </Container>
    )
}

export default Footer;