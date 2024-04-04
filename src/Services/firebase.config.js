// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtkayf7ocIPwTRS3ZOq4OmKi0-xoo9IBw",
  authDomain: "dragon-news-a83ae.firebaseapp.com",
  projectId: "dragon-news-a83ae",
  storageBucket: "dragon-news-a83ae.appspot.com",
  messagingSenderId: "702119347578",
  appId: "1:702119347578:web:77bd94d4af9c02c60f82c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;