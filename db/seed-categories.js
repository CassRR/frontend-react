import { collection, addDoc } from "firebase/firestore";
import db from "./firebase-config.js";
import { categories } from "../categories.js";

const itemCollectionRef = collection(db, "categories");

const promises = categories.map((category) => addDoc(itemCollectionRef, category));

Promise.all(promises).then(() => {
  console.log("done");
  process.exit(0);
});
