import React from 'react';
import { useState,useContext } from 'react';
import { FirebaseContext } from '../../store/FirebaseContext';
import { useNavigate } from 'react-router-dom';
import { auth, firestore } from "../../firebase/config";
import { addDoc, collection } from "firebase/firestore";
import { toast ,ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { getAuth, createUserWithEmailAndPassword ,updateProfile } from 'firebase/auth';

import Logo from '../../olx-logo.png';
import './Signup.css';

export default function Signup() {
  const navigate = useNavigate();
  const [username,setUsername]=useState('');
  const [email,setEmail]=useState('');
  const [phone,setPhone]=useState('');
  const [password,setPassword]=useState('');
  const { firebaseApp } = useContext(FirebaseContext);

  const handleSubmit = (e)=>{
    e.preventDefault()
    const auth = getAuth(firebaseApp);

    // Validation
    if(username.trim() ==''){
      toast.error("Please Enter correct uername")
    }else if(phone.length !=10){
      toast.error("Phone Number Must be 10 digits")

    }else{


    createUserWithEmailAndPassword(auth,email,password)
    .then((result)=>{
      updateProfile(result.user,{displayName:username})
      .then(()=>{
        addDoc(collection(firestore,"users"),{
          id:result.user.uid,
          username:username,
          email:email,
          password:password,
          phone:phone,
        })
       .then(()=>{
          navigate('/Login');
        })
      })
    })
  }
  }
  return (
    <div>
    <ToastContainer />

      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            name="name"
            required
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email" 
            required
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id="fname"
            name="email"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            required
            onChange={(e)=>setPhone(e.target.value)}

            value={phone}
            id="lname"
            name="phone"
            
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            onChange={(e)=>setPassword(e.target.value)}
            value={password}
            type="password"
            id="lname"
            name="password"
            required
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a onClick={()=>{
          navigate('/Login')
        }}>Login</a>
      </div>
    </div>
  );
}
