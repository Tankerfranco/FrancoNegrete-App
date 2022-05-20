import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBOev7-C_I7JRvunusWVWi59JBklANewmg",
  authDomain: "miproyecto-f2a5e.firebaseapp.com",
  projectId: "miproyecto-f2a5e",
  storageBucket: "miproyecto-f2a5e.appspot.com",
  messagingSenderId: "815137798517",
  appId: "1:815137798517:web:fd12699ab663ebab233b3c"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);