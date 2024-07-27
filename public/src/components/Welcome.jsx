import Robot from "../assets/robot.gif";
import "./Welcome.css";

import React from "react";

const Welcome = ({ currentUser }) => {
  return (
    <>
      {currentUser && (
        <div className="Welcome_container">
          <img src={Robot} alt="Robot" />
          <h1>
            Welcome, <span>{currentUser.username}!</span>
          </h1>
          <h3>Please select a chat to Start Messaging</h3>
        </div>
      )}
    </>
  );
};

export default Welcome;
