import { doc, getDoc } from "firebase/firestore";
import { create } from "zustand";
import { db } from "./firebaseconfog";
import { useUserStor } from "./userStor";

export const useChatStore = create((set) => ({
  chatId:null,
  user:null,
  changeChat: (chatId, user) => {
    const currentUser = useUserStor.getState().currentUser;
      return set({
        chatId,
        user,
       
      });
    
  },
  
}));


