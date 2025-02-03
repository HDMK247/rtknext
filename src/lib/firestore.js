import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from 'firebase/firestore';
import { db } from '../firebaseConfig';

// নতুন ডকুমেন্ট তৈরি (Create)
export const addDocument = async (collectionName, data) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), data);
    return docRef;
  } catch (error) {
    console.error('ডকুমেন্ট যোগ করতে সমস্যা: ', error);
    throw error;
  }
};

// ডকুমেন্টসমূহ পড়া (Read)
export const getDocuments = async (collectionName) => {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const docs = [];
    querySnapshot.forEach((docSnap) => {
      docs.push({ id: docSnap.id, ...docSnap.data() });
    });
    return docs;
  } catch (error) {
    console.error('ডকুমেন্ট পড়তে সমস্যা: ', error);
    throw error;
  }
};

// ডকুমেন্ট আপডেট করা (Update)
export const updateDocument = async (collectionName, docId, data) => {
  try {
    const docRef = doc(db, collectionName, docId);
    await updateDoc(docRef, data);
  } catch (error) {
    console.error('ডকুমেন্ট আপডেট করতে সমস্যা: ', error);
    throw error;
  }
};

// ডকুমেন্ট মুছে ফেলা (Delete)
export const deleteDocument = async (collectionName, docId) => {
  try {
    const docRef = doc(db, collectionName, docId);
    await deleteDoc(docRef);
  } catch (error) {
    console.error('ডকুমেন্ট মুছে ফেলতে সমস্যা: ', error);
    throw error;
  }
};
