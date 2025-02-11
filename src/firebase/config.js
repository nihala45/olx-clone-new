import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDOMUtYX_nUPCoco341bq1FufRUotn0vrI",
  authDomain: "olx-clone-new-43c92.firebaseapp.com",
  projectId: "olx-clone-new-43c92",
  storageBucket: "olx-clone-new-43c92.firebasestorage.app",
  messagingSenderId: "244574277831",
  appId: "1:244574277831:web:45406277a870f94ef2aee2",
  measurementId: "G-58H02GZTDX"
};



const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, firestore, firebaseApp , storage };
