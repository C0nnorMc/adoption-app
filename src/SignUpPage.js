import React from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import "./SignUp.css";
import { useRef } from "react";
import { signUp } from "./firebase";

const SignUpPage = () => {
  // const [email, setemail] = useState("");
  // const [password,setPassword] = useState("");
  const emailref = useRef();
  const passwordref = useRef();

  // createUserWithEmailAndPassword(auth, email, password)
  // .then((userCredential) => {
  //     // Signed in
  //     const user = userCredential.user;
  //     // ...
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     // ..
  //   })

  async function handleSignUp() {
    await signUp(emailref.current.value, passwordref.current.value);
  }

  return (
    <div id="signUpContainer">
      <div id="signUpForm">
        <h4>Sign Up</h4>
        <label>Email</label>
        <input id="email" type="text" ref={emailref}></input>
        <label>Password</label>
        <input id="password" type="password" ref={passwordref}></input>

        <button id="submitButton" onClick={handleSignUp}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default SignUpPage;
