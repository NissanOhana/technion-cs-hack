import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  deleteDoc,
  addDoc,
  doc,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbIwrPLIjy4oAQniCWvHGVKNXQJbRFxIc",
  authDomain: "cs-doing-good.firebaseapp.com",
  projectId: "cs-doing-good",
  storageBucket: "cs-doing-good.appspot.com",
  messagingSenderId: "308422742136",
  appId: "1:308422742136:web:d1515604bc5ffe748fdd8d",
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Connect to a collection
export const db = getFirestore();
export const meetingCollectionRef = collection(db, "Meet");

// Get All Doc:
const getItemsDocs = async (DBRef) => {
  let items = [];
  try {
    const snapshot = await getDocs(DBRef);
    snapshot.docs.forEach((doc) => {
      items.push({ ...doc.data(), id: doc.id });
    });
  } catch {
    console.error("Fail to fetch from DB");
  }
  return items;
};

const addItemDoc = async (DBRef, newDoc) => {
  try {
    await addDoc(DBRef, newDoc);
  } catch {
    console.error("Failed to add doc");
  }
};

const deleteItemDoc = async (DBRefName, docID) => {
  try {
    const docRef = doc(db, DBRefName, docID);
    await deleteDoc(docRef);
  } catch {
    console.error("Failed to delete doc");
  }
};

export const getMeetingDocs = () => getItemsDocs(meetingCollectionRef);
export const addMeetingDoc = (newDoc) =>
  addItemDoc(meetingCollectionRef, newDoc);
export const deleteMeetingDoc = (docId) => deleteItemDoc("Meet", docId);
