// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDvXcjvHzsPJSqtpnwYvaXL01dIAVnHYJw",
    authDomain: "netflix-clone-v2-114d8.firebaseapp.com",
    projectId: "netflix-clone-v2-114d8",
    storageBucket: "netflix-clone-v2-114d8.appspot.com",
    messagingSenderId: "46503840927",
    appId: "1:46503840927:web:322ee8f4737b265f1326aa",
    measurementId: "G-RS620E57K9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
