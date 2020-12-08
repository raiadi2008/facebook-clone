// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAuAw5JfJQUqppqGR3kisk1yOrKJ6u-jWI",
  authDomain: "facebook-clone-f6d5c.firebaseapp.com",
  projectId: "facebook-clone-f6d5c",
  storageBucket: "facebook-clone-f6d5c.appspot.com",
  messagingSenderId: "398728144179",
  appId: "1:398728144179:web:ff6c3994ab9d2dc7110a46",
  measurementId: "G-MNZV0SFQ00",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
