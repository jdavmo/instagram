import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBbiZ6Tp_xmwklsdR8lxZ21YgHkFCvmq0k",
  authDomain: "instagram-davmo.firebaseapp.com",
  projectId: "instagram-davmo",
  storageBucket: "instagram-davmo.appspot.com",
  messagingSenderId: "71440671936",
  appId: "1:71440671936:web:9a73999118b6758de67925"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
