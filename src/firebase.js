import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAgBSW87ZbZkFXv-0ZA8IS28OlRNvhgpMU",
  authDomain: "chat-24cd3.firebaseapp.com",
  projectId: "chat-24cd3",
  storageBucket: "chat-24cd3.appspot.com",
  messagingSenderId: "276816589578",
  appId: "1:276816589578:web:b7678d9a2564261b3f80f3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();

// Create a root reference
export const storage = getStorage();
export const db = getFirestore();
