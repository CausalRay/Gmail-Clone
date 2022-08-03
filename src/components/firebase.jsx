import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import firestore from 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDrSJwT1dTcJMLLhx-joPqs74K_eydbRPo",
    authDomain: "clone-9fd42.firebaseapp.com",
    projectId: "clone-9fd42",
    storageBucket: "clone-9fd42.appspot.com",
    messagingSenderId: "670753862463",
    appId: "1:670753862463:web:d4de3470bbdf52d871598a"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };