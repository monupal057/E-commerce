
import { initializeApp } from "firebase/app";

import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAjpd8gksTTajgsYwaELIUHxW-HSm4_eRU",
  authDomain: "zopify-4df46.firebaseapp.com",
  projectId: "zopify-4df46",
  storageBucket: "zopify-4df46.appspot.com",
  messagingSenderId: "197628502337",
  appId: "1:197628502337:web:f5726518d96c6b7d42c1c0"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export{app, auth};