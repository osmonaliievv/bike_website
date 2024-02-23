// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmf01i9OIldcolsgEhLQSbaLr77ogXOOk",
  authDomain: "hack-pack-88f77.firebaseapp.com",
  projectId: "hack-pack-88f77",
  storageBucket: "hack-pack-88f77.appspot.com",
  messagingSenderId: "357634073841",
  appId: "1:357634073841:web:a2a0289777308afeb2b550",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
