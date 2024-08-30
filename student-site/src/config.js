import firebase from "firebase/compat/app";
import { getAuth,setPersistence,browserLocalPersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBv_9ZIjGf_7H8v1OYrZ3MyvhIfJa-s1a4",
  authDomain: "attendance-sys-37345.firebaseapp.com",
  projectId: "attendance-sys-37345",
  storageBucket: "attendance-sys-37345.appspot.com",
  messagingSenderId: "402946866037",
  appId: "1:402946866037:web:cef38544f2dddaa399f13c",
  measurementId: "G-VPHCRH4BV4"
};


const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
await setPersistence(auth, browserLocalPersistence);
export const db = getFirestore(app);
export{firebase};