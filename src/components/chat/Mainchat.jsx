import React, { useEffect, useState } from "react";
import "./mainchat.css";

import {
  arrayUnion,
  collection,
  doc,
  getDoc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../data/firebaseconfog";
import { useChatStore } from "../../data/chatStore";
import { useUserStor } from "../../data/userStor";
export default function Mainchat() {
  
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState("");
  const { currentUser } = useUserStor();
 
  const { chatId, user } = useChatStore();
  useEffect(() => {
    const unAuth = onSnapshot(doc(db, "chats", chatId), (res) => {
      setChat(res.data());

      return () => {
        unAuth();
      };
    });
  }, [chatId]);

  const HandleSend = async () => {
    if (message == "") return;
    try {
      await updateDoc(doc(db, "chats", chatId), {
        messages: arrayUnion({
          senderId: currentUser.uid,

          message,
          createdAt: new Date(),
        }),
      });
      const IdsOfUsers = [currentUser.uid, user.uid];
      IdsOfUsers.forEach(async (uid) => {
        const userchatRef = doc(db, "userchat", uid);
        const userSnapShot = await getDoc(userchatRef);
        if (userSnapShot.exists()) {
          const userChats = userSnapShot.data();
          const indexOfChat = userChats.chats.findIndex(
            (c) => c.chatId === chatId
          );

          userChats.chats[indexOfChat].lastMessage = message;
          userChats.chats[indexOfChat].isSeen =
            uid === currentUser.uid ? true : false;
          userChats.chats[indexOfChat].UpdatedAt = Date.now();

          await updateDoc(userchatRef, {
            chats: userChats.chats,
          });
        }
      });
      setMessage("");
    } catch (error) {
     
    }
  };

  return (
    <div className="mainChat">
      <div className="top">
        <div className="user-main">
          <img
            src={`
  ${user.email == "Akki@gmail.com"
      ? "/imgs/akki.jpg"
      :  user.email == "jones@gmail.com"
      ? "/imgs/Jones.jpg"
      :  user.email == "victor@gmail.com"
      ? "/imgs/viktor.png"
      : "/imgs/user.png"}`}
            alt=""
          />
          <div className="textsMain">
            <span>{user.name}</span>
            <p>Skriv med dem!</p>
          </div>
        </div>
      </div>
      <div className="center-message">
        {chat?.messages?.map((msg) => {
        

          return (
            <div
              className={`message ${
                currentUser.uid === msg.senderId ? "mine" : ""
              }`}
              key={msg?.createdAt}
            >
              <div className="textsCenter">
                <p>{msg.message}</p>
                <span>5 min ago</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="bottom">
        <input
          type="text"
          placeholder="skrive noget..."
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />

        <button
          className="send"
          onClick={() => {
            HandleSend();
          }}
        >
          send
        </button>
      </div>
    </div>
  );
}
