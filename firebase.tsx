import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBiD_Yy0xiMTkKRHx5iIpYe1WoHYr1DpfI",
  authDomain: "educhat-693a2.firebaseapp.com",
  projectId: "educhat-693a2",
  storageBucket: "educhat-693a2.appspot.com",
  messagingSenderId: "754164988102",
  appId: "1:754164988102:web:e608d3397fba1adaf53fc7",
  measurementId: "G-WHRSQWEDMZ"
};

// Initialize Firebase
const app = getApps().length? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };