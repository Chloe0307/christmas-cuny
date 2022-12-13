// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKx0jv89rj4HEvU0gKZLz6pLRtuYSzx6E",
  authDomain: "christmascuny.firebaseapp.com",
  projectId: "christmascuny",
  storageBucket: "christmascuny.appspot.com",
  messagingSenderId: "716847160592",
  appId: "1:716847160592:web:ad0697f661d32b58325995",
  measurementId: "G-EQ80B23WY7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);