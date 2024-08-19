// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBg_UOrzBXfxTdoeqHms5DuWZuxJno5kHM",
  authDomain: "flashcardsaas3.firebaseapp.com",
  projectId: "flashcardsaas3",
  storageBucket: "flashcardsaas3.appspot.com",
  messagingSenderId: "1073525516506",
  appId: "1:1073525516506:web:006051be4bc9f78e459de3",
  measurementId: "G-Q28QC1Q9PF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);