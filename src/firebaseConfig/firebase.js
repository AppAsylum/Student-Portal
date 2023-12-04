// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDWdz_FWm1nus_94yjFv9mae8N_3R3Q4g",
  authDomain: "school-portal-3e6f8.firebaseapp.com",
  projectId: "school-portal-3e6f8",
  storageBucket: "school-portal-3e6f8.appspot.com",
  messagingSenderId: "903324165790",
  appId: "1:903324165790:web:354414f8a5201a2064bd8f",
  measurementId: "G-V7MGWTJWC0"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { auth,db}