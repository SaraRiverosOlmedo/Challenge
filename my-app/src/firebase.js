import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7s7cGZ3fFKByS_TQPPi8yKc5HKcFoDuo",
  authDomain: "lunapetschallenge.firebaseapp.com",
  projectId: "lunapetschallenge",
  storageBucket: "lunapetschallenge.appspot.com",
  messagingSenderId: "296261133071",
  appId: "1:296261133071:web:f7c2b655838b87a0f7d47a",
  measurementId: "G-QZMQ7KVDYC"
};

// Inicializa la aplicación de Firebase con la configuración

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { app, auth, db };



