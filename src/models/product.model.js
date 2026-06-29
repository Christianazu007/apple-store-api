import { db } from '../config/firebase.js';
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  deleteDoc,
  doc
} from 'firebase/firestore';

const productsCollection = collection(db, 'products');

export const getAll = async () => {
  const snapshot = await getDocs(productsCollection);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

export const getById = async (id) => {
  const docRef = doc(db, 'products', id);
  const snapshot = await getDoc(docRef);
  if (!snapshot.exists()) return null;
  return { id: snapshot.id, ...snapshot.data() };
};

export const create = async (data) => {
  const docRef = await addDoc(productsCollection, data);
  return { id: docRef.id, ...data };
};

export const remove = async (id) => {
  const docRef = doc(db, 'products', id);
  const snapshot = await getDoc(docRef);
  if (!snapshot.exists()) return null;
  await deleteDoc(docRef);
  return { id, ...snapshot.data() };
};