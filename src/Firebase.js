// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuLXnmxnNxKLtNBkXruEWtCqQ279hqpZg",
  authDomain: "laapp-d4a7d.firebaseapp.com",
  projectId: "laapp-d4a7d",
  storageBucket: "laapp-d4a7d.appspot.com",
  messagingSenderId: "226055779399",
  appId: "1:226055779399:web:641bb929578186d4d0ed62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);