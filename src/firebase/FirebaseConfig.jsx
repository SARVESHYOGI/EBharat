// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDTWPUzmqMvp3w-WwjcvVUpPSqIddG3jFk",
    authDomain: "myecom-bfcd5.firebaseapp.com",
    projectId: "myecom-bfcd5",
    storageBucket: "myecom-bfcd5.appspot.com",
    messagingSenderId: "61467700471",
    appId: "1:61467700471:web:ef01c1b94209e0ff44b7f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }

