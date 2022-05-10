import React from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

const SignUp = () => {
  const [email, setemail] = useState("");
  const [password,setPassword] = useState("");
  
  
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    })


  const handleChangeEmail = e => {
    setemail(e.target.value)
  }

  const handleChangePassword = e => {
    setPassword(e.target.value)
  }
  return (
    <div>
    <form >
      <h4>Sign In</h4>
      <label>
        Email:
        <input id="email" type="text" value={email} onChange={handleChangeEmail}></input>
      </label>
      <label>
        Password
        <input id="password" type="text" value={password} onChange={handleChangePassword}></input>
      </label>
      <input type="submit" value="submit" onClick={createUserWithEmailAndPassword}></input>
      <h5>{email} {password}</h5>
    </form>
    </div>
  );
};

export default SignUp;
