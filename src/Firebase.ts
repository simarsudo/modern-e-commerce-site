// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
	apiKey: "AIzaSyAwtEiJmkt40X9AYecLrDmhfPaQtwBfPso",
	authDomain: "e-commerce-e2b99.firebaseapp.com",
	projectId: "e-commerce-e2b99",
	storageBucket: "e-commerce-e2b99.appspot.com",
	messagingSenderId: "404178985624",
	appId: "1:404178985624:web:b289c70bc58f40af1766ed",
	measurementId: "G-T0TK8BZ69Y",
};
// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const fireDB = getFirestore(app);
export const fireAuth = getAuth(app);
