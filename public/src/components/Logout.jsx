import React from "react";
import { useNavigate } from "react-router-dom";
import { BiPowerOff } from "react-icons/bi";
import "./Logout.css"
const Logout = () => {
  const navigate = useNavigate();
  const handleClick = async () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <div className="btn" onClick={handleClick}>
      <BiPowerOff />
    </div>
  );
};

export default Logout;
