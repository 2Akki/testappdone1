import React, { useEffect, useState } from "react";
import "./chatlist.css";
import AddUser from "./AddUser.jsx";
import { FaMinus, FaPlus, FaSearch } from "react-icons/fa";
import { useUserStor } from "../../../data/userStor.js";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../../data/firebaseconfog.js";
import { useChatStore } from "../../../data/chatStore.js";
export default function Chatlist() {
  const [add, SetAdd] = useState(false);
  const [chats, SetChats] = useState([]);
  const { currentUser } = useUserStor();
  const { changeChat} = useChatStore();
  useEffect(() => {
    const unSub = onSnapshot(
      doc(db, "userchat", currentUser.uid),
      async (res) => {
        const items = res.data().chats;

        const promises = items.map(async (item) => {
          const userDocRef = doc(db, "users", item.receiverId);
          const userDocSnap = await getDoc(userDocRef);

          const user = userDocSnap.data();

          return { ...item, user };
        });

        const chatData = await Promise.all(promises);

        SetChats(chatData.sort((a, b) => b.updatedAt - a.updatedAt));
      }
    );

    return () => {
      unSub();
    };
  }, [currentUser.uid]);
  


  const HandleChoose = async(chat)=>{
    console.log("click")
    changeChat(chat.chatId,chat.user)
  }
  return (
    <>
      <div className="search">
        <div className="searchbar">
          <FaSearch />
          <input type="text" placeholder="søge"></input>
        </div>
        <div
          onClick={() => {
            SetAdd(!add);
          }}
        >
          {add ? <FaMinus className="add" /> : <FaPlus className="add" />}
        </div>
      </div>
      <div className="chatlist">
        {chats.map((chat) => {
         console.log(chat)
          const imgSrc =
          chat.user.email == "Akki@gmail.com"
              ? "/imgs/akki.jpg"
              :  chat.user.email == "jones@gmail.com"
              ? "/imgs/Jones.jpg"
              :  chat.user.email == "victor@gmail.com"
              ? "/imgs/victor.jpg"
              : "/imgs/user.png";
          return (
            <div className="item" key={chat.chatId} onClick={()=>{
              HandleChoose(chat)
            }}>
              <img src={imgSrc}></img>
              <div className="texts">
                <span>{chat.user.name}</span>
                <p>{chat.lastMessage}</p>
              </div>
            </div>
          );
        })}

        {add ? <AddUser></AddUser> : ""}
      </div>
    </>
  );
}