// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Import only auth here; analytics can be initialized conditionally in the browser if needed
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCogTW6C2CyPd3rbHVj9S42XtQsLzEEb38",
  authDomain: "dosmetov-5c7c7.firebaseapp.com",
  projectId: "dosmetov-5c7c7",
  // fix storage bucket to the typical format
  storageBucket: "dosmetov-5c7c7.appspot.com",
  messagingSenderId: "892997339527",
  appId: "1:892997339527:web:857ead1532f871122d6b22",
  measurementId: "G-02LD6152GP"
};

// Initialize Firebase app and auth. Export named values so other modules can use them directly.
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
export default app;