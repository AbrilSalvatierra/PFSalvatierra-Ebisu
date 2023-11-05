import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBmXdKkheVZbRO38Pmy_I74esZ-5o8hTnw",
  authDomain: "ebisu-juguetes.firebaseapp.com",
  projectId: "ebisu-juguetes",
  storageBucket: "ebisu-juguetes.appspot.com",
  messagingSenderId: "77199118273",
  appId: "1:77199118273:web:617b815d5a243ae8c6e940"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);