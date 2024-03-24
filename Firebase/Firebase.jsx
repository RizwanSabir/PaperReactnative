import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    apiKey: "X",
    authDomain: "X",
    projectId: "X",
    storageBucket: "X",
    messagingSenderId: "X",
    appId: "X",
    measurementId: "X"
};

const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
  });
 export const db = getFirestore(app);