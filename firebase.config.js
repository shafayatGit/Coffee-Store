// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";
import {
    getAuth
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDDuncYoqdSsyeAYHesGosYSatEddMRa-Y",
    authDomain: "coffee-store-e85cb.firebaseapp.com",
    projectId: "coffee-store-e85cb",
    storageBucket: "coffee-store-e85cb.firebasestorage.app",
    messagingSenderId: "749215536881",
    appId: "1:749215536881:web:a890c076ad447308903b50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)