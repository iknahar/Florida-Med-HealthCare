import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config.js";

function firebaseInitialization() {
  initializeApp(firebaseConfig);
}

export default firebaseInitialization;
