import React, { useState } from "react";
import "../css/Login.css";
import { db, login, signup } from "../data/firebaseconfog";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { doc, setDoc } from "firebase/firestore";

export default function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const toggleMode = () => {
    setIsSignUp(!isSignUp);

    setErrorMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSignUp) {
      try {
        const res = await signup(email, password);
        setErrorMessage("");

        await setDoc(doc(db, "users", res.user.uid), {
          name: userName,
          uid: res.user.uid,
          email: email,
        });
        await setDoc(doc(db, "userchat", res.user.uid), {
          chats: [],
        });
        
        navigate("/chat");
        toast.success("Konto oprettet og logget ind");
      } catch (error) {
        
        if (error.code === "auth/invalid-email") {
          setErrorMessage("ikke en gyldig email");
        } else {
          setErrorMessage(error.message);
        }
      }
    } else {
      try {
        const res = await login(email, password);
        setErrorMessage("");
       toast.success("logget ind")
        navigate("/chat");
      } catch (error) {
       
        if (error.code === "auth/invalid-email") {
          setErrorMessage("ikke en gyldig email eller kodeord");
        } else {
          setErrorMessage(error.message);
        }
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">{isSignUp ? "Lav en Konto" : "Log ind"}</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="login-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Kode ord"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {isSignUp ? (
            <input
              type="text"
              placeholder="Bruger Navn"
              className="login-input"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          ) : (
            ""
          )}
          <button type="submit" className="login-btn">
            {isSignUp ? "Sign Up" : "Log Ind"}
          </button>
        </form>

        {errorMessage && (
          <div
            className="error-message"
            style={{ color: "red", marginTop: "10px" }}
          >
            {errorMessage}
          </div>
        )}
        <p className="toggle-text" onClick={toggleMode}>
          {isSignUp ? "har en konto? Log ind" : "har ikke en konto? Lav en!"}
        </p>
      </div>
    </div>
  );
}
