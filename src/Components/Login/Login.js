import React from 'react';

import Logo from '../../olx-logo.png';
import './Login.css';

import { useState,useContext } from 'react';
import { FirebaseContext } from '../../store/FirebaseContext';
import { useNavigate } from 'react-router-dom';
import { auth, firestore } from "../../firebase/config";
import { addDoc, collection } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword ,updateProfile, signInWithEmailAndPassword } from 'firebase/auth';


function Login() {
  const navigate = useNavigate();
  const { firebaseApp } = useContext(FirebaseContext);
  const [email,setEmail]=useState()
  const [password,setPassword]=useState()  

  const handleLogin = (e)=>{
    e.preventDefault()
    const auth =getAuth(firebaseApp);

    signInWithEmailAndPassword(auth,email,password)
    .then((result)=>{
     navigate('/')
    }).catch((error)=>alert(error.message))
  }

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            onChange={(e)=>setEmail(e.target.value)}

            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            onChange={(e)=>setPassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a onClick={()=>{
          navigate('/signup')
        }}>Signup</a>
      </div>
    </div>
  );
}

export default Login;
