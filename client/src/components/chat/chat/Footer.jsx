import { Box ,InputBase ,styled } from "@mui/material";

import { MdOutlineEmojiEmotions } from "react-icons/md";
import { HiOutlinePaperClip } from "react-icons/hi2";
import { FaMicrophone } from "react-icons/fa6";

import React ,{useEffect ,useState} from 'react';
import EmojiPicker from "emoji-picker-react";
import { uploadFile } from "../../../service/api";


const Container = styled(Box)`
height:56px;
background:#ededed;
display:flex;
width:100%;
align-items:center;
padding: 0 15px;
& > * {
margin:5px;
color:#919191;
}
`

const Search = styled(Box)`
background-color:#FFFFFF;
border-radius:18px;
width: calc(94% - 100px)
`


const InputField = styled(InputBase)`
width:100%;
padding:20px;
height: 20px;
padding-left:25px;
font-size:14px;
`





const Footer = ({sendText ,setValue,value, file, setFile ,setImage}) => {
   
 const [showEmojiPicker, setShowEmojiPicker] = useState(false);


   const handleEmojiModal = () => {
    setShowEmojiPicker((prev) => !prev);
   }

   const handleEmojiClick = ( emojiObject) => {
    if (emojiObject && emojiObject.emoji) {
      setValue((prevValue) => prevValue + emojiObject.emoji);
    }
  };



    // for file to be uploaded on mongoDb
    useEffect(() => {
   const getImage = async () => {
    if(file){
        const data = new FormData();
        data.append("name", file.name);
        data.append("file",file);
    
   
    
      // api call for uploading the image to the mongoDb
      const response =  await uploadFile(data);
      if(response.data){
        console.log(response)
        setImage(response.data);
      }
 
    }
   }
     getImage();
    },[file])


   const onFileChange = (e) => {
    setFile(e.target.files[0]);
    setValue(e.target.files[0].name);
   }


    return (
  <Container>
   <MdOutlineEmojiEmotions 
   id="emoji-open"
   onClick={handleEmojiModal}
   />
   {showEmojiPicker && <Box style={{position:"absolute",bottom:70,zIndex:40}}>
    <EmojiPicker theme="dark" onEmojiClick={handleEmojiClick}/>
    </Box>
    }
   <label htmlFor="fileInput">
   <HiOutlinePaperClip/>
   </label>
    <input type="file" id="fileInput" style={{display:'none'}}
    onChange={(e) => onFileChange(e)}
    />
   <Search>
    <InputField placeholder="Type a message"
    onChange={(e) => setValue(e.target.value)}
    onKeyPress={sendText}
    value={value}
    />
   </Search>
   <FaMicrophone/>
  </Container>
    )
}


export default Footer;

