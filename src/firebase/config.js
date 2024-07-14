import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDVA6Fezs3M2once3XIv4vgaU5P53kz4l0",
    authDomain: "olx-clone-54178.firebaseapp.com",
    projectId: "olx-clone-54178",
    storageBucket: "olx-clone-54178.appspot.com",
    messagingSenderId: "755911763525",
    appId: "1:755911763525:web:2a41eb4c9748cc70e8652c",
    measurementId: "G-K8MYJ5BHBY"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, firestore, firebaseApp , storage };
