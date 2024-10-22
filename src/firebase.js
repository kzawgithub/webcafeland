// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALT5UM6Wv2UQbs5eYljgeILKwq2TbY0_A",
  authDomain: "cafe-web-land.firebaseapp.com",
  projectId: "cafe-web-land",
  storageBucket: "cafe-web-land.appspot.com",
  messagingSenderId: "109293500919",
  appId: "1:109293500919:web:b359d365f42a8995c656f2",
  measurementId: "G-3RRWXXGB87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);