import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createRoot } from 'react-dom/client';
import {FirebaseContext} from './store/FirebaseContext';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { collection, getDocs } from 'firebase/firestore';
import { auth, firestore, firebaseApp } from './firebase/config';
import Context from './store/FirebaseContext';

const container = document.getElementById('root')
const root = createRoot(container)

root.render(

    <FirebaseContext.Provider value={{ auth, firestore, firebaseApp }}>
        <Context>
      <App />
      </Context>
    </FirebaseContext.Provider>,
);

