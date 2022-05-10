import "./App.css";

import { db } from "./firebase.js";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import TinderCards from "./TinderCards";
import Header from "./Header";
import SignUp from "./SignUp";
import { BrowserRouter as Router,Route,Link,Routes } from "react-router-dom";
import ChatPage from "./ChatPage";

function App() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, "Animals"), (snapshot) => {
      setAnimals(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path ="/signup" element ={<SignUp/>}></Route>
          <Route path="/chat" element={<ChatPage />}></Route>
          <Route path="/" element={<TinderCards animal={animals} />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
