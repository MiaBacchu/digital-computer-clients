import firebaseConfig from './config';
import { initializeApp } from "firebase/app";

const initializeAthentication = () => {
    initializeApp(firebaseConfig)
};

export default initializeAthentication;