import { collection, addDoc } from "firebase/firestore";
import db from "./firebase-config.js";
import products from "../products.js";

const itemCollectionRef = collection(db, "items");

const promises = products.map((product) => addDoc(itemCollectionRef, product));

Promise.all(promises).then(() => {
  console.log("done");
  process.exit(0);
});
