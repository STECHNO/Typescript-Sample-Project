import firebase from 'firebase';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDWn7GayRIVtAPHOU8K9gepO5tWhESpsY4",
    authDomain: "typescript-sample-e62a1.firebaseapp.com",
    projectId: "typescript-sample-e62a1",
    storageBucket: "typescript-sample-e62a1.appspot.com",
    messagingSenderId: "3466898663",
    appId: "1:3466898663:web:c2b13a98ed3cd244504642"
  };

  // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig);