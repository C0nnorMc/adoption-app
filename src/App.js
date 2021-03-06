import "./App.css";
import SignInPage from "./SignInPage";
import { db } from "./firebase.js";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import TinderCards from "./TinderCards";
import Header from "./Header";
import SignUpPage from "./SignUpPage";
import { BrowserRouter as Router,Route,Link,Routes } from "react-router-dom";
import ChatPage from "./ChatPage";
import ProfilePage from "./ProfilePage"

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
           {/* <Route path ="signin" element ={<SignInPage/>}></Route>   */}
          <Route path ="profile" element ={<ProfilePage/>}></Route>
          {/* {<Route path ="messages" element={<Messages/>}></Route>} */}
          <Route path ="/signup" element ={<SignUpPage/>}></Route>
          {/* <Route path="/chat" element={<ChatPage />}></Route> */}
          <Route path="/" element={<TinderCards animal={animals} />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
