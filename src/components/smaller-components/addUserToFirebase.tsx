import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase';

const addUserToFirestore = async (userData: any) => {
  const usersCollectionRef = collection(db, 'Registered');
  console.log(usersCollectionRef);
  try {
    const newUserRef = await addDoc(usersCollectionRef, userData);
    console.log('User added with ID: ', newUserRef.id);
    return newUserRef.id;
  } catch (error) {
    console.error('Error adding user:', error);
    throw new Error('Failed to add user to Firestore');
  }
};

export default addUserToFirestore;
