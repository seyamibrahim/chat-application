import React, { useEffect, useState , useRef} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { allUsersRoute,host } from "../utils/APIRoutes";
import Contacts from "../components/Contacts";
import "./Chat.css";
import Welcome from "../components/Welcome";
import ChatContainer from "../components/ChatContainer";
import {io} from "socket-io-client";

const Chat = () => {
  const navigate = useNavigate();
  
  const socket = useRef();

  const [contacts, setContacts] = useState([]);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [currentChat, setCurrentChat] = useState(undefined);

  const handleChatChange = (chat) => {
    setCurrentChat(chat);
  };
  useEffect(() => {
    const fetchData = async () => {
      if (!localStorage.getItem("chat-app-user")) {
        navigate("/login");
      } else {
        setCurrentUser(await JSON.parse(localStorage.getItem("chat-app-user")));
       
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    if(currentUser){
      socket.current = io(host)
      socket.current.emit("add-user", currentUser._id)
    }
    
  }, [currentUser])
  
  useEffect(() => {
    const fetchCurrentUser = async () => {
      if (currentUser) {
        if (currentUser.isAvatarImageSet) {
          const data = await axios.get(`${allUsersRoute}/${currentUser._id}`);
          setContacts(data.data);
        } else {
          navigate("/setAvatar");
        }
      }
    };
    fetchCurrentUser();
  }, [currentUser]);

  return (
    <div className="outer_container">
      <div className="inner_container">
        <Contacts
          contacts={contacts}
          currentUser={currentUser}
          ChangeChat={handleChatChange}
        />

        { currentChat === undefined ? (
          <Welcome></Welcome>
        ) : (
          <ChatContainer currentChat={currentChat} socket = {socket}/>
        )}
      </div>
    </div>
  );
};

export default Chat;
