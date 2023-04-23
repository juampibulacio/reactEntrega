import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, where, query, addDoc, orderBy } from 'firebase/firestore'
import products from "../data/products";

const firebaseConfig = {
  apiKey: "AIzaSyAqQy4_a_bKtKKn8H9R-V_6yv9Fwek5az0",
  authDomain: "react-proyecto-jpb.firebaseapp.com",
  projectId: "react-proyecto-jpb",
  storageBucket: "react-proyecto-jpb.appspot.com",
  messagingSenderId: "797659741138",
  appId: "1:797659741138:web:0703eec6c633d40bb8260b"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export async function getItems () {
   const productsRef = collection (db, "products"); 
   const q = query(productsRef, orderBy("index"))
   const productsSnap = await getDocs (q)
   const documents = productsSnap.docs;

   const docsData = documents.map((doc) => {
   return {id: doc.id, ...doc.data()}
   /* const data = doc.data();
   data.id = doc.id;
   return data */
   }
   );
   return docsData;
}


export async function getSingleItem(idURL) {
    

const docRef = doc(db, "products", idURL);
const docSnap = await getDoc(docRef);
return {id: docSnap.id, ...docSnap.data()}
}


export async function getItemsByCategory(categoryid) {
    const productsRef = collection (db, "products");
    const q = query(productsRef, where("category", "==", categoryid));

    const productsSnap = await getDocs (q)
    const documents = productsSnap.docs;
 
    const docsData = documents.map((doc) => {
    return {id: doc.id, ...doc.data()}
    /* const data = doc.data();
    data.id = doc.id;
    return data */
    }
    );
    return docsData;
}


export async function createOrder(order) {
 const collectionOrdersRef = collection(db, "orders");
 const response = await addDoc(collectionOrdersRef, order)
 return response.id
}

export async function exportData() {
   const collectionRef = collection(db,"products")
   for(let item of products) {
    item.index = item.id;
    delete item.id;
    const response = await addDoc(collectionRef, item)
    console.log("producto exportado" + response.id)
   }
}
