// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAtbwDczkYFDUWoEdqeOH_LR-_S7-F6ID4",
    // apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "passiton-6b6e6.firebaseapp.com",
    projectId: "passiton-6b6e6",
    storageBucket: "passiton-6b6e6.appspot.com",
    messagingSenderId: "237406923238",
    appId: "1:237406923238:web:20ea2e920b870fb11ece27"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);