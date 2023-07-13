import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCUt4VOugZs6jgDX0D8Qbqy2tW4y7_CNrw',
  authDomain: 'instagram-mern-9fcf8.firebaseapp.com',
  projectId: 'instagram-mern-9fcf8',
  storageBucket: 'instagram-mern-9fcf8.appspot.com',
  messagingSenderId: '612997398829',
  appId: '1:612997398829:web:38f09b6938cf4b06ddd3a4',
  measurementId: 'G-T4EMSBCZZS',
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
