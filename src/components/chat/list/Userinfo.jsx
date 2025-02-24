import React from "react";
import { FaEllipsisH, FaVideo, FaEdit } from "react-icons/fa";
import "./userinfo.css";
import { useUserStor } from "../../../data/userStor";

export default function Userinfo() {
  const { currentUser } = useUserStor();
  return (
    <div className="userinfo">
      <div className="user">
        <img
          src={` ${
            currentUser.email == "Akki@gmail.com"
              ? "/imgs/akki.jpg"
              : currentUser.email == "jones@gmail.com"
              ? "/imgs/Jones.jpg"
              : currentUser.email == "victor@gmail.com"
              ? "/imgs/victor.jpg"
              : "/imgs/user.png"
          }`}
        ></img>

        <h2>{currentUser.name}</h2>
      </div>

      <div className="icons">
        
      </div>
    </div>
  );
}
