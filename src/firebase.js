import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBR1CIDeuv36I8uwMSRpVKsKleLzbKhk70",
    authDomain: "netflix-chill-b1baa.firebaseapp.com",
    projectId: "netflix-chill-b1baa",
    storageBucket: "netflix-chill-b1baa.appspot.com",
    messagingSenderId: "316382727212",
    appId: "1:316382727212:web:3eb9a3e363b3a09d671589",
    measurementId: "G-MP1QTZ3C2C"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;