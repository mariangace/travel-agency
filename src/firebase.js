import firebase from 'firebase'; 

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.REACT_APP_DB_KEY,
    authDomain: "travel-agency-5847a.firebaseapp.com",
    projectId: "travel-agency-5847a",
    storageBucket: "travel-agency-5847a.appspot.com",
    messagingSenderId: "724826680299",
    appId: "1:724826680299:web:fece9dce499438797c07ae",
    measurementId: "G-KPT7WV1XPK"
  };

  console.log(firebaseConfig)
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };