import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDvL8PmuNbXNIqOLd1figAtFeJUPNT1UxA',
  authDomain: 'preacher-conference.firebaseapp.com',
  projectId: 'preacher-conference',
  storageBucket: 'preacher-conference.appspot.com',
  messagingSenderId: '70582698450',
  appId: '1:70582698450:web:b68ad74a59aeec0553080b',
  measurementId: 'G-BXLKFMGNXM',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
