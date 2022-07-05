// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAFLk3opNFZZ52S6-UN5EbpNprQB0AxPQQ",
    authDomain: "doctors-portal-shamim.firebaseapp.com",
    projectId: "doctors-portal-shamim",
    storageBucket: "doctors-portal-shamim.appspot.com",
    messagingSenderId: "1092382668749",
    appId: "1:1092382668749:web:783235be99cc43a1657684",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

// apiKey: process.env.REACT_APP_API_KEY,
// authDomain: process.env.REACT_APP_AUTH_DOMAIN,
// projectId: process.env.REACT_APP_PROJECT_ID,
// storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
// messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
// appId: process.env.REACT_APP_APP_ID,
