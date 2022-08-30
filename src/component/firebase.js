import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Installation - 

const firebaseConfig = {
    apiKey: "AIzaSyD_DI16RkTSK-i_JEwUzAScVatc8JUjrUk",
    authDomain: "clone-d16b0.firebaseapp.com",
    projectId: "clone-d16b0",
    storageBucket: "clone-d16b0.appspot.com",
    messagingSenderId: "459536397296",
    appId: "1:459536397296:web:fe17f28df1644fcd1ea335",
    measurementId: "G-JC5T6KZCFV"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth}