import { doc, getDoc } from "firebase/firestore";
import { create } from "zustand";
import { db } from "./firebaseconfog";

export const useUserStor = create((set) => ({
  isLoading: true,
  currentUser: null,
 
  getUserInfo: async (uid) => {
    if (!uid) return set({ currentUser: null,isLoading: false });

    try {
      const docRef = doc(db, "users", uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        set({ currentUser: docSnap.data(),isLoading: false});
      } else {
        set({ currentUser: null,isLoading: false });
      }
    } catch (err) {
      console.log(err);
      return set({ currentUser: null, isLoading: false });
    }
  },
}));


