import React,{useEffect,useContext} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostProvider from './store/PostContext';

import Signup from './Pages/Signup';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Create from './Pages/Create'
import View from './Pages/ViewPost'
import { FirebaseContext } from './store/FirebaseContext';
import './App.css';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase/config';
import { AuthContext } from './store/FirebaseContext';

function App() {
  const {setUser}=useContext(AuthContext)
  useEffect(()=>{
    onAuthStateChanged( auth,(user)=>{
      setUser(user)
    })
  })
  return (
    <div>
      <PostProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Create' element={<Create />} />
          <Route path='/viewpost' element={<View />} />
          


        </Routes>
      </Router>
      </PostProvider>
    </div>
  );
}
 ;
export default App;
