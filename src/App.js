import './App.css';

import { db } from './firebase.js';
import { collection , onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import TinderCards from './TinderCards';
import Header from './Header'



function App() {

  const [animals, setAnimals] = useState([])

  useEffect(()=>{

    onSnapshot(collection(db,'Animals'),(snapshot)=>{

      setAnimals(snapshot.docs.map(doc => doc.data()))

  })},[])

  return (

    <div className="App">
      <Header/>

      <TinderCards animal={animals} />

     

    </div>

  );

}



export default App;