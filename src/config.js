
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCzgsxuYZL6apAiMyzbdTtfQ5_c4xWU5Gk",
  authDomain: "sign-7e2b9.firebaseapp.com",
  projectId: "sign-7e2b9",
  storageBucket: "sign-7e2b9.appspot.com",
  messagingSenderId: "827368725626",
  appId: "1:827368725626:web:f0424f0d6d052e4bd22fc3",
  measurementId: "G-ZDRZWFHXVZ"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth (app)
const provider = new GoogleAuthProvider ();
export {auth, provider};