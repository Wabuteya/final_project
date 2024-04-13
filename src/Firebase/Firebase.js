// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import App from "../App";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsrwUCaMU-UYSlBdI11XW0aDtOXNaUOPo",
  authDomain: "the-eastafrican-literature.firebaseapp.com",
  projectId: "the-eastafrican-literature",
  storageBucket: "the-eastafrican-literature.appspot.com",
  messagingSenderId: "598739006703",
  appId: "1:598739006703:web:c7bf0c61dcffb0ae74d71a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app;