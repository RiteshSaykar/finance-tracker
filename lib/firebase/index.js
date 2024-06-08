// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFlZDrOXuo6tz8jQmGVrGu5_B7r_4fhIc",
  authDomain: "finance-tracker-27291.firebaseapp.com",
  projectId: "finance-tracker-27291",
  storageBucket: "finance-tracker-27291.appspot.com",
  messagingSenderId: "79650519035",
  appId: "1:79650519035:web:87c6bd607e2910cb36bd5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db,auth }; 