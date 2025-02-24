// firebaseconfog.js

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA4al-D2q4FvsqX8esxu-n8Y-vs_ukMX_s",
  authDomain: "informatikproject-535b2.firebaseapp.com",
  projectId: "informatikproject-535b2",
  storageBucket: "informatikproject-535b2.firebasestorage.app",
  messagingSenderId: "646959892088",
  appId: "1:646959892088:web:8689d2c70b7d8c02f9cf8d",
  measurementId: "G-9LCQXL219X",
};

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore();

function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

function logout() {
  return signOut(auth);
}



export { signup, login, logout, onAuthStateChanged ,db };
