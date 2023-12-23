// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7MHemqC-gnR11EeR8KXwXIQJnrOYRHUk",
  authDomain: "pawnspace-e65a5.firebaseapp.com",
  projectId: "pawnspace-e65a5",
  storageBucket: "pawnspace-e65a5.appspot.com",
  messagingSenderId: "117732935602",
  appId: "1:117732935602:web:a1e40fb33a7d8d413b46ab",
  measurementId: "G-GWCRJHB04R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);