import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDELeY9i0RxUlY4B3oI9KNdYDcGZJqHvgI",
  authDomain: "clone-4a9c8.firebaseapp.com",
  databaseURL: "https://clone-4a9c8.firebaseio.com",
  projectId: "clone-4a9c8",
  storageBucket: "clone-4a9c8.appspot.com",
  messagingSenderId: "923851931943",
  appId: "1:923851931943:web:29b65072b287568c8b2902",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
