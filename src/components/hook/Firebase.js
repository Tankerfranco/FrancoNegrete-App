import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDgiwIk8VfegaJPqTDG5GVhAx63h823nnA",
  authDomain: "trabagoreact.firebaseapp.com",
  projectId: "trabagoreact",
  storageBucket: "trabagoreact.appspot.com",
  messagingSenderId: "755277524190",
  appId: "1:755277524190:web:6a1a46be7d034082bfa64f"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);