import React, { useState } from "react";
import Picker from "emoji-picker-react";
import { IoMdSend } from "react-icons/io";
import { BsEmojiSmileFill } from "react-icons/bs";
import "./ChatInput.css";
function ChatInput({ handleSendMsg }) {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const [msg, setMsg] = useState("");
  const handleEmojiPicker = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };
  const handleEmojiClick = (e,emojiobj) => {
    console.log(emojiobj)
    let message = msg;
    message += emojiobj.emoji;
    setMsg(message) ;
  };
  const sendChat = (e) =>{
    e.preventDefault();
    if(msg.length > 0){
        handleSendMsg(msg);
        setMsg("");
    }
  }
  return (
    <div className="chatInput_container">
      <div className="button-container">
        <div className="emoji">
          <BsEmojiSmileFill onClick={handleEmojiPicker} />
          {showEmojiPicker && <Picker onEmojiClick={handleEmojiClick} />}
        </div>
      </div>
      <form className="input-container" onSubmit={(e) => sendChat(e)}>
        <input
          type="text"
          placeholder="type your message here"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />
        <button className="submit">
          <IoMdSend />
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
