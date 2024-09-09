import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADwkW6DgFoe6R9k2voar3RnLCylwPt3Ts",
  authDomain: "netfilex-clone-5a13d.firebaseapp.com",
  projectId: "netfilex-clone-5a13d",
  storageBucket: "netfilex-clone-5a13d.appspot.com",
  messagingSenderId: "632682414395",
  appId: "1:632682414395:web:46ca9cd5dd7dc8a787771e"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);