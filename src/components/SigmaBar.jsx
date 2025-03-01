import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/Navbar.css";
import { logout, onAuthStateChanged } from "../data/firebaseconfog";
import { useAuth } from "../AuthContext";
import { getAuth } from "firebase/auth";

export default function Navbar() {
  const [linkActive, setLinkActive] = useState(false);
  const [currentUser,setCurrentUser] = useState(null);
  useEffect(() => {
    const auth = getAuth();
    const unAuth = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => unAuth(); 
  }, []);
  return (
    <div className="nav">
      <div className="logo">SukkerHubben</div>
      <div
        className={`Links ${linkActive ? "active" : ""}`}
        onClick={() => setLinkActive(false)}
      >
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "link isActive" : "link")}
        >
          Home
        </NavLink>
        <NavLink
          to="/chat"
          className={({ isActive }) => (isActive ? "link isActive" : "link")}
        >
          Chat
        </NavLink>
        <NavLink
          to="/spil"
          className={({ isActive }) => (isActive ? "link isActive" : "link")}
        >
          Spil
        </NavLink>
        {currentUser ? (
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "link isActive" : "link")}
            onClick={() => {
              logout();
            }}
          >
            Log Ud
          </NavLink>
        ) : (
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? "link isActive" : "link")}
          >
            Log ind
          </NavLink>
        )}
      </div>
    </div>
  );
}
