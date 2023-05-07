import { Button } from "@mui/material";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import React from "react";
import { auth, provider } from "./firebase";
import "./Login.css";

function Login() {
  const signIn = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider).catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://parentzone.org.uk/sites/default/files/styles/parent_zone_hero/public/2022-03/Discord_Card.png?itok=_K-Vcc1H"
          alt=""
        />
      </div>
      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}

export default Login;
