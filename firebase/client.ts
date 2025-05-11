import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC2C3cLswDKglczy8gtz13oe2Wf2gmGDuU",
  authDomain: "trainertalk-72a4e.firebaseapp.com",
  projectId: "trainertalk-72a4e",
  storageBucket: "trainertalk-72a4e.firebasestorage.app",
  messagingSenderId: "364225471789",
  appId: "1:364225471789:web:74efbdbc3f8d3e145e1fa4",
  measurementId: "G-LTCNCY91Z5",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
