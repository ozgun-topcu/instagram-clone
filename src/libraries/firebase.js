import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import seedDatabase from "../seed";


const config = {
apiKey: "AIzaSyDqyzs5gpKkungzLKVnkpmjPwihT-wWTpQ",
authDomain: "instagram-clone-1e15c.firebaseapp.com",
projectId: "instagram-clone-1e15c",
storageBucket: "instagram-clone-1e15c.appspot.com",
messagingSenderId: "76474790098",
appId: "1:76474790098:web:2370c8c0adc7287946fd0b"};


const firebase = Firebase.initializeApp(config);
const {FieldValue} = Firebase.firestore;

//seedDatabase(firebase);

export  {firebase, FieldValue};
