// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQ4ty-JxYMcyBr5Hl6bb-AJ3LqCxIvNFc",
  authDomain: "streamifygpt-af5be.firebaseapp.com",
  projectId: "streamifygpt-af5be",
  storageBucket: "streamifygpt-af5be.firebasestorage.app",
  messagingSenderId: "818886720795",
  appId: "1:818886720795:web:8be2aabf9293f44ae8e7be",
  measurementId: "G-H3KJKNWDBV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);