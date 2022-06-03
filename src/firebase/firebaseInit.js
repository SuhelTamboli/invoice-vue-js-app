import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  //add your own firebase congif here
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
