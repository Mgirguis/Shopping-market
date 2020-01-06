import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBbGHeKjlS2UCrm5e51Ze8WbYX7-n-mMRY",
    authDomain: "shopping-market-29559.firebaseapp.com",
    databaseURL: "https://shopping-market-29559.firebaseio.com",
    projectId: "shopping-market-29559",
    storageBucket: "shopping-market-29559.appspot.com",
    messagingSenderId: "122083613636",
    appId: "1:122083613636:web:da724cfd4ec8748ef32291"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  // export firebase authentication and firestore modules
  export const auth = firebase.auth();
  export const fireStore = firebase.firestore();

//Google authentication setup

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;