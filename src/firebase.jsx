import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBCn9x04zmlwwoWAjFIqEc-FC_NXUgbFfM",
    authDomain: "netflix-clone-65ab7.firebaseapp.com",
    projectId: "netflix-clone-65ab7",
    storageBucket: "netflix-clone-65ab7.appspot.com",
    messagingSenderId: "495921085680",
    appId: "1:495921085680:web:f95f62eb8876b50d0b5635"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth };
export default db;
