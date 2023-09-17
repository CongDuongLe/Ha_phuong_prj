// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9jkjD2J5nxWyHO-9WY8IerjTrZVg-5AQ",
  authDomain: "web-nps.firebaseapp.com",
  projectId: "web-nps",
  storageBucket: "web-nps.appspot.com",
  messagingSenderId: "1089759908477",
  appId: "1:1089759908477:web:caef84dc9ec1c7ceee5714",
  measurementId: "G-66381SDBK4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);





