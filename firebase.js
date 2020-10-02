import * as firebase from "firebase";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDnIwXWN6RtIT_0xmDXMZTopzTIOo6WZmk",
  authDomain: "scheduler-7debc.firebaseapp.com",
  databaseURL: "https://scheduler-7debc.firebaseio.com",
  projectId: "scheduler-7debc",
  storageBucket: "scheduler-7debc.appspot.com",
  messagingSenderId: "235578334600",
  appId: "1:235578334600:web:0dcd61afcc7ae3447a2e3d",
  measurementId: "G-9BKPNDB0VP",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
