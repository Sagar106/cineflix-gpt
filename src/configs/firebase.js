// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaTf6tydg4qMU5l4zMgIFMwN8unlyekjs",
  authDomain: "cineflix-gpt-29826.firebaseapp.com",
  projectId: "cineflix-gpt-29826",
  storageBucket: "cineflix-gpt-29826.firebasestorage.app",
  messagingSenderId: "947813265375",
  appId: "1:947813265375:web:e17e5193f3fb4b5f7a5e6a",
  measurementId: "G-5KWBWS1129",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);
