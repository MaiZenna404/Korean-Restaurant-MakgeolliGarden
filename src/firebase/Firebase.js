import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtR8ySt7hyepjIJ3P5DO1yaiwjHHOnZ9c",
  authDomain: "makgeolli-garden.firebaseapp.com",
  projectId: "makgeolli-garden",
  storageBucket: "makgeolli-garden.appspot.com",
  messagingSenderId: "163249716942",
  appId: "1:163249716942:web:42c03730198e24c9ce9a9f"
};


// Initialiser Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db}













/*// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Initialize Firebase
const app = initializeApp(firebaseConfig);

// clé API : AIzaSyBtR8ySt7hyepjIJ3P5DO1yaiwjHHOnZ9c */