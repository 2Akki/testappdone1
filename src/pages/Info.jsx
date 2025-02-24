import React, { useEffect } from "react";

import "../css/info.css";
import Sidebar from "../components/chat/list/Sidebar";
import Mainchat from "../components/chat/Mainchat";
import Notification from "../components/chat/list/Notification";
import { useUserStor } from "../data/userStor";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useChatStore } from "../data/chatStore";
export default function Info() {
  const {isLoading,currentUser,getUserInfo} = useUserStor();
    const {chatId} = useChatStore()
   useEffect(() => {
      const auth = getAuth();
      const unAuth = onAuthStateChanged(auth, (user) => {
        getUserInfo(user.uid)
        
   })
   
    return ()=>{
      unAuth();
    }
      },[getUserInfo]);
  return (
    <>
     {isLoading?"...":<div className="container">
      <Sidebar></Sidebar>
     {chatId&&<Mainchat/>}
     <Notification></Notification>
    </div>}
    </>
   
    
  );
}
