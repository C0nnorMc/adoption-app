import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore';



const firebaseConfig = {



    apiKey: "AIzaSyCI9rgPw2l3zuBQ-7GbNzHyijm3ktKuPqc",



 



    authDomain: "tinder-clone-efa79.firebaseapp.com",



 



    projectId: "tinder-clone-efa79",



 



    storageBucket: "tinder-clone-efa79.appspot.com",



 



    messagingSenderId: "364819743674",



 



    appId: "1:364819743674:web:9a3d837c7dbaf34f989383",



 



    measurementId: "G-87QVV4R8N7"



};



const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { db }