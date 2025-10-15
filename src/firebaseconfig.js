// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3JSeH6Kbj3Dl_OA-KXzpmZWA2Ee-S23k",
  authDomain: "guess-the-character-name.firebaseapp.com",
  projectId: "guess-the-character-name",
  storageBucket: "guess-the-character-name.firebasestorage.app",
  messagingSenderId: "869169090433",
  appId: "1:869169090433:web:95c3c2aca95e45f4c36280",
  measurementId: "G-3JY7RG17LW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);