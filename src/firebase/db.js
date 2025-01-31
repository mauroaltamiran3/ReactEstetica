/* eslint-disable no-unused-vars */
import {
    getFirestore,
    collection,
    getDocs,
    query,
    where,
    doc,
    getDoc,
    addDoc,
    } from "firebase/firestore";
import { app } from "./config";

const db = getFirestore(app);

export const getProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "products"));
    const products = [];

    querySnapshot.forEach((doc) => {
        products.push({ id: doc.id, ...doc.data() });
    });

    return products;
}

export const getProductsByCategory = async (category) => {
    const q = query(collection(db, "products"), where("category", "==", category));
    const querySnapshot = await getDocs(q);
    const products = [];

    querySnapshot.forEach((doc) => {
        products.push({ id: doc.id, ...doc.data() });
    });

    return products;
}

export const getProductById = async (id) => {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() };
    } else {
        return null;
    }
}

export const createOrder = async (order) => {
    try {
      const docRef = await addDoc(collection(db, "orders"), order)
      console.log("Document written with ID: ", docRef.id)
      return docRef.id;
    } catch (e) {
      console.error("Error adding document: ", e)
      return null;
    }
  }