import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCDi7_JfKxOLjr1wR294icyE7DPR6phoiU",
  authDomain: "to-do-app-dbad2.firebaseapp.com",
  projectId: "to-do-app-dbad2",
  storageBucket: "to-do-app-dbad2.appspot.com",
  messagingSenderId: "84954049294",
  appId: "1:84954049294:web:411fc8df20dd662337455f",
  measurementId: "G-5K0FVDSKVW",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
