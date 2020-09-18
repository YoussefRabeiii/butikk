import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBw0ONFnHpT9qPgpdKlegG0Ew73B5jBhOY",
  authDomain: "butikkken.firebaseapp.com",
  databaseURL: "https://butikkken.firebaseio.com",
  projectId: "butikkken",
  storageBucket: "butikkken.appspot.com",
  messagingSenderId: "749417102451",
  appId: "1:749417102451:web:ec86e6bb2bb22a09a27e06",
  measurementId: "G-YZ9YJ2R16K",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
