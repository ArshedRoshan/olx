import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyALYx7qukiPZCC17qNZnueq1hM4wuf_ahI",
    authDomain: "olx-pro-61b93.firebaseapp.com",
    projectId: "olx-pro-61b93",
    storageBucket: "olx-pro-61b93.appspot.com",
    messagingSenderId: "931383643085",
    appId: "1:931383643085:web:c9710dcc2dc0a7495ed284",
    measurementId: "G-L6TYZFKFBK"
  };

 export default firebase.initializeApp(firebaseConfig)