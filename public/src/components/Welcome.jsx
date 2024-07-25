import React, { useEffect, useState } from "react";
import Robot from "../assets/robot.gif";
import "./Welcome.css";

function Welcome() {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const setname = async () => {
      setUserName(
        await JSON.parse(localStorage.getItem("chat-app-user")).username
      );
    };
    setname();
  }, []);

  return (
    
    <div className="Welcome_container">
      <img src={Robot} alt="Robot" />
      <h1>
        Welcome, <span>{userName}!</span>
      </h1>
      <h3>Please select a chat to Start Messaging</h3>
    </div>
  );
}

export default Welcome;
