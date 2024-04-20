// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "re-plot-9bebb.firebaseapp.com",
  projectId: "re-plot-9bebb",
  storageBucket: "re-plot-9bebb.appspot.com",
  messagingSenderId: "347291654109",
  appId: "1:347291654109:web:fb26fb76c4f102c6e90834",
//   measurementId: "G-2E4Z4EJTVD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);