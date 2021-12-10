import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyDSKCtAt1Pw2RWeKtGmM3tb0lovU6_VrBk",
  authDomain: "expensify-74bcf.firebaseapp.com",
  projectId: "expensify-74bcf",
  storageBucket: "expensify-74bcf.appspot.com",
  messagingSenderId: "671036611729",
  appId: "1:671036611729:web:396024b07709af3026f330",
  measurementId: "G-XQ90DPJK4H"
};

// Initialize Firebase
let firebaseApp;

if(!firebase.apps.length){
  firebaseApp = firebase.initializeApp(config);
} else {
  firebaseApp = firebase.app();
}

firebase.analytics();
const database = firebaseApp.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

/*
    apiKey:            FIREBASE_API_KEY,
    authDomain:        FIREBASE_AUTH_DOMAIN,
    databaseURL:       FIREBASE_DATABASE_URL,
    projectId:         FIREBASE_PROJECT_ID ,
    storageBucket:     FIREBASE_STORAGE_BUCKET,
    messagingSenderId: FIREBASE_MESSAGING_SENDER_ID ,
    appId:             FIREBASE_APP_ID ,
    measurementId:     FIREBASE_MEASUREMENT_ID
*/