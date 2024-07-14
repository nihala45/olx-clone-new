import { useState,createContext } from "react";
import { firebaseApp, auth, firestore, storage } from '../firebase/config';

export const FirebaseContext = createContext(null )
export const AuthContext = createContext(null)

export default function Context ({children}){
    const[user,setUser]=useState(null)
    return(
        <AuthContext.Provider value={{user,setUser}}>
            <FirebaseContext.Provider value={{ firebaseApp, auth, firestore, storage }}>
            {children}
            </FirebaseContext.Provider>
        </AuthContext.Provider>

    );
}