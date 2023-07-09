import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

import firebase from 'firebase/compat/app';

const firebaseConfig = {
    apiKey: "AIzaSyDFwl87q4ZylcefdC8QO3GMARf04jQ_CYg",
    authDomain: "katmandu-c6a24.firebaseapp.com",
    projectId: "katmandu-c6a24",
    storageBucket: "katmandu-c6a24.appspot.com",
    messagingSenderId: "331192954662",
    appId: "1:331192954662:web:4ee9e64f4465eb7789dbe7",
    measurementId: "G-5J3DQ2QJTS"
  };


  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  
  export default db;
  export { getFirestore, app };