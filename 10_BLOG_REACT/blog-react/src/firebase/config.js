// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtIIchn4SwkiXNEbteddMKdlQ3i0LEdvA",
  authDomain: "blog-estudo-react.firebaseapp.com",
  projectId: "blog-estudo-react",
  storageBucket: "blog-estudo-react.firebasestorage.app",
  messagingSenderId: "550601362533",
  appId: "1:550601362533:web:0a55f923299a9823c88a8c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// metodo de importação do banco de dados no firebase
const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth };
