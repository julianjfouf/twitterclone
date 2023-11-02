import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB3YNNt6G_l19X0m8fOK-Snei4SAekmen0",
  authDomain: "twitter-3ea6d.firebaseapp.com",
  projectId: "twitter-3ea6d",
  storageBucket: "twitter-3ea6d.appspot.com",
  messagingSenderId: "647453850602",
  appId: "1:647453850602:web:eb6f296d6826e4613fd093",
  measurementId: "G-L0T1NYHXD9",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
