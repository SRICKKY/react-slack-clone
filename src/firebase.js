import firebase from "firebase";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyBIs0afDaU7HubKBq7Kf-xa_QcHov77oJY",
  authDomain: "react-slack-clone-7c208.firebaseapp.com",
  databaseURL: "https://react-slack-clone-7c208.firebaseio.com",
  projectId: "react-slack-clone-7c208",
  //   storageBucket: "react-slack-clone-7c208.appspot.com",
  storageBucket: "react-slack-clone-7c208.appspot.com",
  messagingSenderId: "29963426754",
  appId: "1:29963426754:web:ba3ad642dc4ebe375e545b",
  measurementId: "G-LEJE9BHXBV"
};

firebase.initializeApp(config);

export default firebase;
