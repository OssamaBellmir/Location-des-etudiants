import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCLodi6T0Ptr0p_LfMpdcpfSVq4mF5d3jY",
  authDomain: "project-mobile-ecole.firebaseapp.com",
  projectId: "project-mobile-ecole",
  storageBucket: "project-mobile-ecole.appspot.com",
  messagingSenderId: "1059507861770",
  appId: "1:1059507861770:web:3e4cb17d21666b951d22f3",
};

const initializeFirebase = () => {
  if (!getApps().length) {
    return initializeApp(firebaseConfig);
  }
  return getApp();
};

const app = initializeFirebase();
const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, firestore, auth, storage};
