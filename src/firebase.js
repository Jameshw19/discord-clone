import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDWRcKalnJeqywOmvrPV9iP0MjQQcOmyaY",
  authDomain: "discord-clone-1d99d.firebaseapp.com",
  projectId: "discord-clone-1d99d",
  storageBucket: "discord-clone-1d99d.appspot.com",
  messagingSenderId: "195715473418",
  appId: "1:195715473418:web:618554423f286f39843ff3",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
