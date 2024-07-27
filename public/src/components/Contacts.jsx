import React, { useState, useEffect } from "react";
import Logo from "../assets/logo.svg";
import "./Contacts.css";

const Contacts = ({ contacts, currentUser , ChangeChat}) => {
  const [currentUserName, setCurrentUserName] = useState(undefined);
  const [currentUserImage, setCurrentUserImage] = useState(undefined);
  const [currentSlected, setCurrentSlected] = useState(undefined);

  
  useEffect(() => {
    const setdata = async () => {

      if (currentUser) {
        setCurrentUserImage(currentUser.avatarImage);
        setCurrentUserName(currentUser.username);
      }
    }
    setdata();
  }, [currentUser]);
  

  const changeCurrentChat = (index, contact) =>{
    setCurrentSlected(index);
    ChangeChat(contact);
  }
  return (
    <>
      {currentUserImage && currentUserName && (
        <div className="Contact_container">
          <div className="brand">
            <img src={Logo} alt="logo" />
            <h3>snappy</h3>
          </div>
          <div className="contacts">
            {contacts.map((contact, index) => {
              return (
                <div
                  onClick={() => changeCurrentChat(index,contact)}
                  key={contact._id}
                  className={`contact ${
                    index === currentSlected ? "selected" : ""
                  }`}
                >
                  <div className="avatar">
                    <img
                      src={`data:image/svg+xml;base64,${contact.avatarImage}`}
                      alt="avatar"
                    />
                  </div>
                  <div className="username">
                    <h3>{contact.username}</h3>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="current-user">
            <div className="avatar">
              <img
                src={`data:image/svg+xml;base64,${currentUserImage}`}
                alt="avatar"
              />
            </div>
            <div className="username">
              <h2>{currentUserName}</h2>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Contacts;
