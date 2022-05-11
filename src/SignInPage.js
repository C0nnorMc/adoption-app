import { useRef } from "react";
import { signIn } from "./firebase";


const SignInPage = () => {
  const emailref = useRef();
  const passwordref = useRef();

  return (
    <div id="signUpContainer">
      <div id="signUpForm">
        <h4>Welcome!</h4>
        <label>Email</label>
        <input id="email" type="text" ref={emailref}></input>
        <label>Password</label>
        <input id="password" type="password" ref={passwordref}></input>

        <button id="submitButton">
          Sign Up
        </button>
        <h3>currently signed in as: </h3>
      </div>
    </div>
  );
};

export default SignInPage;
