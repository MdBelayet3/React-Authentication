// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSgaua3Pv7X_Kn0DvuK_XH1fcJQsqDl8E",
  authDomain: "react-authentication-f3b14.firebaseapp.com",
  projectId: "react-authentication-f3b14",
  storageBucket: "react-authentication-f3b14.firebasestorage.app",
  messagingSenderId: "370064249435",
  appId: "1:370064249435:web:815e4e078163a9235d657e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;