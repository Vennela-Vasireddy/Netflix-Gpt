// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaW-N9gzqsGxtKGIhe_h8d5vhDFeiQNx0",
  authDomain: "netflixgpt-ed1ca.firebaseapp.com",
  projectId: "netflixgpt-ed1ca",
  storageBucket: "netflixgpt-ed1ca.firebasestorage.app",
  messagingSenderId: "273112943095",
  appId: "1:273112943095:web:4ea019fc2a57bcee40c6f2",
  measurementId: "G-09PEP9WK6T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();