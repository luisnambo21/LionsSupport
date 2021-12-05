import firebase from "firebase";
import  "firebase/firestore";   
//codigo que conecta la base de datos
var firebaseConfig = {
  apiKey: "AIzaSyACEQsgRjcXriGIVhRlL552rfS6VEqhAtA",
  authDomain: "crud-1302d.firebaseapp.com",
  projectId: "crud-1302d",
  storageBucket: "crud-1302d.appspot.com",
  messagingSenderId: "60723971020",
  appId: "1:60723971020:web:c3e36daf69583fd8ce9369"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
 
const db = firebase.firestore();

export default {
    firebase,
    db
};