import React, { useEffect, useState, useContext } from 'react';
import { FirebaseContext } from '../../store/FirebaseContext';
import { postContext } from '../../store/PostContext';  
import './Post.css';
import { collection, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

function Posts() {
  const [products, setProducts] = useState([]);
  const { firestore } = useContext(FirebaseContext);
  const { setPostDetails } = useContext(postContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestore, 'products'));
        const allProducts = querySnapshot.docs.map((pro) => ({
          id: pro.id,
          ...pro.data(),
        }));
        setProducts(allProducts);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProducts();
  }, [firestore]);

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => {
                setPostDetails(product);
                navigate('/viewpost');
              }}
              className="card"
            >
              <div className="favorite">
                {/* <Heart></Heart> */}
              </div>
              <div className="image">
                <img src={product.url} alt="" />
              </div>
              <div className="content">
                <p className="rate">&#x20B9; {product.price}</p>
                <span className="kilometer">{product.category}</span>
                <p className="name"> {product.name}</p>
              </div>
              <div className="date">
                <span>{product.createdAt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              {/* <Heart></Heart> */}
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
