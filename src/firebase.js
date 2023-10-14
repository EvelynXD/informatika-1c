// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDn09RAQLsSccCv7L2tiv5elwt_P8tCDBs",
  authDomain: "web-kelas-1c.firebaseapp.com",
  projectId: "web-kelas-1c",
  storageBucket: "web-kelas-1c.appspot.com",
  messagingSenderId: "652183898933",
  appId: "1:652183898933:web:dafe98b4afee531a9d9a7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
