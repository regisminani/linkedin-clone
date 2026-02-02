import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDeXz4p4ZDAaZWquPMZWN-ORFJJfqj8nHA",
  authDomain: "linkedin-clone-8aaf3.firebaseapp.com",
  projectId: "linkedin-clone-8aaf3",
  storageBucket: "linkedin-clone-8aaf3.appspot.com",
  messagingSenderId: "1038699852360",
  appId: "1:1038699852360:web:02ee98fc54a4a477a0de7d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
