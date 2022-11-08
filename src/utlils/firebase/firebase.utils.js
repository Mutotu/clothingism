import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD5lBiWJshVpTj23n39YxolyjEzUrV_Fa8",
  authDomain: "clothingism-db.firebaseapp.com",
  projectId: "clothingism-db",
  storageBucket: "clothingism-db.appspot.com",
  messagingSenderId: "185703985560",
  appId: "1:185703985560:web:f9da9a9ccea8164281fbed",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signinWithGooglePopup = () => signInWithPopup(auth, provider);
