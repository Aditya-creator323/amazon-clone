import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCKB_i5NK8x2heH9CVXmkly497d6bIeW-s",
    authDomain: "challenge-3b99a.firebaseapp.com",
    projectId: "challenge-3b99a",
    storageBucket: "challenge-3b99a.appspot.com",
    messagingSenderId: "142691750782",
    appId: "1:142691750782:web:9934ce652d84cd2ed8592f",
    measurementId: "G-5ZSLF0BDL0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };
