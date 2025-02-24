 import React, { useEffect, useState } from "react";
 import "./adduser.css";
 import {
   arrayUnion,
   collection,
   doc,
   getDocs,
   query,
   serverTimestamp,
   setDoc,
   updateDoc,
   where,
 } from "firebase/firestore";
 import { db } from "../../../data/firebaseconfog";
 import { useUserStor } from "../../../data/userStor";





const AddUser = () => {
  const [user, setUser] = useState(null);

  const { currentUser } = useUserStor();

  const handleSearch = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get("username");

    try {
      const userRef = collection(db, "users");

      const q = query(userRef, where("name", "==", username));

      const querySnapShot = await getDocs(q);

      if (!querySnapShot.empty) {
        setUser(querySnapShot.docs[0].data());
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleAdd = async () => {
    const chatRef = collection(db, "chats");
    const userChatsRef = collection(db, "userchat");

    try {
      const newChatRef = doc(chatRef);

      await setDoc(newChatRef, {
        createdAt: serverTimestamp(),
        messages: [],
      });

      await updateDoc(doc(userChatsRef, user.uid), {
        chats: arrayUnion({
          chatId: newChatRef.id,
          lastMessage: "",
          receiverId: currentUser.uid,
          updatedAt: Date.now(),
        }),
      });

      await updateDoc(doc(userChatsRef, currentUser.uid), {
        chats: arrayUnion({
          chatId: newChatRef.id,
          lastMessage: "",
          receiverId: user.uid,
          updatedAt: Date.now(),
        }),
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="addUser">
      <form onSubmit={handleSearch}>
        <input type="text" placeholder="Username" name="username" />
        <button>Søg</button>
      </form>
      {user && (
        <div className="userAdd">
          <div className="detail">
          <img
               src={
                 user.email === "Akki@gmail.com"
                   ? "/imgs/akki.jpg"
                   : user.email === "jones@gmail.com"
                   ? "/imgs/Jones.jpg"
                  : user.email === "victor@gmail.com"
                   ? "/imgs/victor.jpg"
                  : "/imgs/user.png"
               }
               alt="User avatar"
             />
            <span>{user.username}</span>
          </div>
          <button onClick={handleAdd}>Tilføj bruger</button>
        </div>
      )}
    </div>
  );
};

export default AddUser;