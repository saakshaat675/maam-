import firebase from "firebase";
require("@firebase/firestore");


const firebaseConfig = {
    apiKey: "AIzaSyAvRUSH_DsHhDWM73WRxEaHKKS4YOWeLtU",
    authDomain: "fire2-87bf5.firebaseapp.com",
    projectId: "fire2-87bf5",
     storageBucket: "fire2-87bf5.appspot.com",
    messagingSenderId: "709888048039",
    appId: "1:709888048039:web:43e32e7674ef736a30d482"
  };


  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();