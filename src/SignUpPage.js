import React from "react";
import { useState } from "react";
import "./SignUp.css";
import { useRef } from "react";
import { signUp, getAuth, useAuth, logout, login } from "./firebase";

const SignUpPage = () => {
  const emailref = useRef();
  const passwordref = useRef();
  const currentUser = useAuth();

  const [loading, setLoading] = useState(false);
  async function handleSignUp() {
    //Don't know why setloading isn't working
    setLoading(true);
    try {
      await signUp(emailref.current.value, passwordref.current.value);
    } catch {
      alert("error!");
    }
    setLoading(false);
  }
  async function handleLogin() {
    setLoading(true);
    try {
      await login(emailref.current.value, passwordref.current.value);
    } catch {
      alert("error!");
    }
    setLoading(false);
  }

  async function handleLogout() {
    try {
      await logout();
    } catch (error) {
      alert("error");
    }
  }

  return (
    <div id="signUpContainer">
      <div id="signUpForm">
        <h4>Welcome!</h4>
        <label>Email</label>
        <input id="email" type="text" ref={emailref}></input>
        <label>Password</label>
        <input id="password" type="password" ref={passwordref}></input>

        <button disabled={loading} id="submitButton" onClick={handleSignUp}>
          Sign Up
        </button>
        <div>currenly signed in as: {currentUser?.email}</div>
        <button placeholder="Email" onClick={handleLogout}>
          Log out
        </button>
        <button placeholder="Password" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default SignUpPage;
