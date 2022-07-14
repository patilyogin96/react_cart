import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyB7oC4kOxlyfR6gwYsLzUTVUuNBdznAckM",
    authDomain: "cart-d2190.firebaseapp.com",
    projectId: "cart-d2190",
    storageBucket: "cart-d2190.appspot.com",
    messagingSenderId: "370411633076",
    appId: "1:370411633076:web:b02adaad90ccc511121ae1"
  };

  firebase.initializeApp(firebaseConfig);
  export default firebase;