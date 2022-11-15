// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBduAjIAUIbZ0-377SgrERZdRST-vcVGdM",
  authDomain: "react-fb-auth-8f093.firebaseapp.com",
  projectId: "react-fb-auth-8f093",
  storageBucket: "react-fb-auth-8f093.appspot.com",
  messagingSenderId: "917378274970",
  appId: "1:917378274970:web:69d7a9f847ec66bf64b123"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);