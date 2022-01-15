import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
  apiKey: "AIzaSyAvc4viEvBkBXNRKRoamB7AcR2lOpQyW30",
  authDomain: "e-library-a3d21.firebaseapp.com",
  projectId: "e-library-a3d21",
  storageBucket: "e-library-a3d21.appspot.com",
  messagingSenderId: "762032392256",
  appId: "1:762032392256:web:e351e56841b3250e1c77a5"
};




firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


