import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCCXUViA-NBXnq8NO_fg_AMrC_U_wK8Tvo',
  authDomain: 'my-app-ce510.firebaseapp.com',
  projectId: 'my-app-ce510',
  storageBucket: 'my-app-ce510.firebasestorage.app',
  messagingSenderId: '685629570901',
  appId: '1:685629570901:web:ef72016b0f46c7a356b9dc',
  measurementId: 'G-RGR9L46D39',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
