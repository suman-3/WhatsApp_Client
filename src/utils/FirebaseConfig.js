

import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth"



const firebaseConfig = {
    apiKey: "AIzaSyDqVHhVJKrqXLvaU_gKVhge5CMsEohzBD4",
    authDomain: "whatsapp-clone-9f18a.firebaseapp.com",
    projectId: "whatsapp-clone-9f18a",
    storageBucket: "whatsapp-clone-9f18a.appspot.com",
    messagingSenderId: "998737725014",
    appId: "1:998737725014:web:e95ec150d785030f6cddf7",
    measurementId: "G-J549LFC0G5"
  };
  

  const app = initializeApp(firebaseConfig);

  export const firebaseAuth = getAuth(app);