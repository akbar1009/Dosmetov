// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCogTW6C2CyPd3rbHVj9S42XtQsLzEEb38",
  authDomain: "dosmetov-5c7c7.firebaseapp.com",
  projectId: "dosmetov-5c7c7",
  storageBucket: "dosmetov-5c7c7.firebasestorage.app",
  messagingSenderId: "892997339527",
  appId: "1:892997339527:web:857ead1532f871122d6b22",
  measurementId: "G-02LD6152GP"
};

// Initialize Firebase
const Firebase =()=> initializeApp(firebaseConfig);
export default Firebase