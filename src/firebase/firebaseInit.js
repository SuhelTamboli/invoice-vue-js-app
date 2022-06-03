import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyClFLiPaOljt8LlrE-j_w0jqlQeKQ1V7HA",
  authDomain: "invoice-app-yt-93792.firebaseapp.com",
  projectId: "invoice-app-yt-93792",
  storageBucket: "invoice-app-yt-93792.appspot.com",
  messagingSenderId: "623644670457",
  appId: "1:623644670457:web:89b9d250595d8e1ae7a528",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
