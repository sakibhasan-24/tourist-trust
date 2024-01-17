// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "tourist-trust.firebaseapp.com",
  projectId: "tourist-trust",
  storageBucket: "tourist-trust.appspot.com",
  messagingSenderId: "1096384162835",
  appId: "1:1096384162835:web:9540794bc36b00cb1be3e6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
