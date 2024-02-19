import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

//go to terminal and type npm i firebase, to connect firebase with react components
//firebaseConfig is from firebase project settings > Config
const firebaseConfig = ({
    apiKey: "AIzaSyAcTux1H1RvdKwiWeqWuZKS1VZLdhN4U7I",
    authDomain: "amebooks.firebaseapp.com",
    projectId: "amebooks",
    storageBucket: "amebooks.appspot.com",
    messagingSenderId: "298451792667",
    appId: "1:298451792667:web:195903ab59433addfb99be",
    measurementId: "G-P3KX6YSPDB"
  });

  // Use this to initialize the firebase App
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };