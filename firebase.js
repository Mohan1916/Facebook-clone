import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDSWObpIPRgwWtgQuHxvfD7axX2w7ixnE0",
    authDomain: "facebook-clone-7ed28.firebaseapp.com",
    databaseURL: "https://facebook-clone-7ed28.firebaseio.com",
    projectId: "facebook-clone-7ed28",
    storageBucket: "facebook-clone-7ed28.appspot.com",
    messagingSenderId: "632383419570",
    appId: "1:632383419570:web:f957fd81cdd0a3e03005ab",
    measurementId: "G-YBMDJ14PMQ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider}
export default db;