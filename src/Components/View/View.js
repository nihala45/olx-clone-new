import React,{useState,useEffect ,useContext} from 'react';
import { postContext } from '../../store/PostContext';
import { FirebaseContext } from '../../store/FirebaseContext';
import { collection,doc,getDocs ,getDoc,query,where } from 'firebase/firestore';

import './View.css';

function View() {
  
  const [userDetails,setUserDetails]=useState({});
  const {postDetails} = useContext(postContext)
  console.log(postContext,"dhasyugbasidj")
  const {db}=useContext(FirebaseContext)
  useEffect(()=>{
    const {userId}=postDetails;

    const fetchUserDetails = async () =>{
      try {
        const docRef = doc(db,"users",userId);
        const docSnap = await getDoc(docRef);

        if(docSnap.exists()){
          console.log(docSnap.data,'halooooooo    ')

          setUserDetails(docSnap.data());
        }else{
          console.log("No such documents")
        }
      }catch(error){
        console.log(error.message)
      }
    };
    fetchUserDetails();
  },[])


  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price}</p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>
        <div className="contactDetails">
          <p>{userDetails.username}</p>
          <p>No name</p>
          <p>{userDetails.phone}</p>
        </div>
      </div>
    </div>
  );
}
export default View;
