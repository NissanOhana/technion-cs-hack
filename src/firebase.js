import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCU-_q-YMt6k1-VXOLowA2A95Xx3LrBuAA",
  authDomain: "matan1-23.firebaseapp.com",
  projectId: "matan1-23",
  storageBucket: "matan1-23.appspot.com",
  messagingSenderId: "381227379862",
  appId: "1:381227379862:web:552de3f54a24e41f09e6b7",
  measurementId: "G-E1VH4TJVPM"
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

export const auth = getAuth();
