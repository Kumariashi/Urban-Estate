// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-514f9.firebaseapp.com",
  projectId: "mern-estate-514f9",
  storageBucket: "mern-estate-514f9.appspot.com",
  messagingSenderId: "738509691378",
  appId: "1:738509691378:web:85635be12a4b6e17f1736b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);