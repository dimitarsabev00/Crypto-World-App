// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAKDNwsovg5NHKXT-Ynew3D1MpfcocRtBs",
  authDomain: "crypto-world-cfd31.firebaseapp.com",
  projectId: "crypto-world-cfd31",
  storageBucket: "crypto-world-cfd31.appspot.com",
  messagingSenderId: "449956271441",
  appId: "1:449956271441:web:571aa87d803bba37f6af70",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // For Authentication
const db = getFirestore(app); // For Using Database

export { auth, db };
