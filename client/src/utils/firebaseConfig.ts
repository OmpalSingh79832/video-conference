

import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import {collection,getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2Xq8QSgxX-HbzgU8-7gT8NcC-3uNkEuw",
  authDomain: "meet-with-37f9c.firebaseapp.com",
  projectId: "meet-with-37f9c",
  storageBucket: "meet-with-37f9c.appspot.com",
  messagingSenderId: "849244382594",
  appId: "1:849244382594:web:f6b1ed7309affbdb235b9b",
  measurementId: "G-PX51393KNQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth=getAuth(app)
export const firebaseDB=getFirestore(app)

export const usersRef=collection(firebaseDB,"users")
export const meetingsRef=collection(firebaseDB,"meetings")

// login email
const auth=getAuth()
export {app,auth}