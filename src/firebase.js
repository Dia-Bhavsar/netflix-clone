// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDibw69WnPJifDwANLy-keIjItY8h41eOs",
    authDomain: "netflix-clone-aaef5.firebaseapp.com",
    projectId: "netflix-clone-aaef5",
    storageBucket: "netflix-clone-aaef5.appspot.com",
    messagingSenderId: "564210566835",
    appId: "1:564210566835:web:5103659448f988713cd2c6",
    measurementId: "G-W40SQWV5WG"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth};
  export default db;