import firebase from "firebase";
import  "firebase/firestore";   
//Código que conecta la base de datos
var firebaseConfig = {
  apiKey: "AIzaSyAtrWElhYWIscOAK9Ww8LIc2HmW79ncFV0",
  authDomain: "lionssupport-471fa.firebaseapp.com",
  projectId: "lionssupport-471fa",
  storageBucket: "lionssupport-471fa.appspot.com",
  messagingSenderId: "988757581275",
  appId: "1:988757581275:web:f5bb98f4d2ee74e3c41bfe"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
 
const db = firebase.firestore();

export default {
    firebase,
    db
};