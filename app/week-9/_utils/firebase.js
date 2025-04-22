// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBoIbQWWYroIB0G-YPxDhV8BZofs7U_oQ",
  authDomain: "cprg306-assignments-619d5.firebaseapp.com",
  projectId: "cprg306-assignments-619d5",
  storageBucket: "cprg306-assignments-619d5.firebasestorage.app",
  messagingSenderId: "950486717280",
  appId: "1:950486717280:web:690a34e9820914d5f3c405"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);