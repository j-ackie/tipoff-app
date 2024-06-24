// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { get, getDatabase, push, ref, set } from 'firebase/database';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBBFADuOiDM1AJEFtAZmMsPa3vGZw_Znfw',
  authDomain: 'tipoff-a1a3c.firebaseapp.com',
  projectId: 'tipoff-a1a3c',
  storageBucket: 'tipoff-a1a3c.appspot.com',
  messagingSenderId: '682910115888',
  appId: '1:682910115888:web:8e9a3feb16ad8c9ff4a5f5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

const db = getDatabase(app);

const getData = async (path: string) => {
  return await get(ref(db, path));
};

const setData = async (path: string, data: any) => {
  return await set(ref(db, path), data);
};

const pushData = async (path: string, data: any) => {
  return await push(ref(db, path), data);
};

export { app, auth, getData, setData, pushData };
