// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import ProductItem from "../src/components/ProductItem";
import ProductList from "../src/components/ProductsList";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALhObRIJruhMqHSbIE5XJuQlkotUaO1lI",
  authDomain: "ecommerce-4f927.firebaseapp.com",
  projectId: "ecommerce-4f927",
  storageBucket: "ecommerce-4f927.appspot.com",
  messagingSenderId: "996642376207",
  appId: "1:996642376207:web:8c94a265f3c491f23d717a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
