// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from '/firebase/firestore'
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQIiFNKquIqyfSCMtFtwYxBW4ZHgawoKE",
  authDomain: "react-gm-322a2.firebaseapp.com",
  projectId: "react-gm-322a2",
  storageBucket: "react-gm-322a2.appspot.com",
  messagingSenderId: "669337316519",
  appId: "1:669337316519:web:29d8563fd1e35321153f82",
  measurementId: "G-E8FRYGKZJ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {db}