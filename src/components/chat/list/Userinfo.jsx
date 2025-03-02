import React from "react";
import "./userinfo.css";
import { useUserStor } from "../../../data/userStor";
import { useChatStore } from "../../../data/chatStore";

export default function Userinfo() {
  const { currentUser } = useUserStor();
  const { chatId } = useChatStore();
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
              ? "/imgs/viktor.png"
              : "/imgs/user.png"
          }`}
        ></img>

        <h2>{currentUser.name}</h2>
      </div>
{
  chatId?"":<div className="info-user">
  Bruger Navn for at skrive med: Akki, Victor, Jones
  </div>
}
      
    </div>
  );
}
