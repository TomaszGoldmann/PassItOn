// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: "AIzaSyAtbwDczkYFDUWoEdqeOH_LR-_S7-F6ID4",
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: "passiton-6b6e6.firebaseapp.com",
    projectId: "passiton-6b6e6",
    storageBucket: "passiton-6b6e6.appspot.com",
    messagingSenderId: "237406923238",
    appId: "1:237406923238:web:20ea2e920b870fb11ece27"
};

console.log(import.meta.env.VITE_API_KEY)

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const colRefMessages = collection(db, 'messages')