import { initializeApp } from "firebase/app";
import { connectAuthEmulator, getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "*************************",
    authDomain: "*************************",
    databaseURL: "*************************",
    projectId: "*************************",
    storageBucket: "*************************",
    messagingSenderId: "*************************",
    appId: "*************************",
    measurementId: "*************************"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
connectAuthEmulator(auth, "http://127.0.0.1:9099");