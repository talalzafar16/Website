// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDo0K0HepONM7_qOhu2amjwpTUJE9igGk",
  authDomain: "registration-from-41f04.firebaseapp.com",
  projectId: "registration-from-41f04",
  storageBucket: "registration-from-41f04.appspot.com",
  messagingSenderId: "797757831458",
  appId: "1:797757831458:web:f9e589674ca61885d34d7b",
  measurementId: "G-SZR74PZY47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;