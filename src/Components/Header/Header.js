import React, { useContext } from "react";
import "./Header.css";
import OlxLogo from "../../assets/OlxLogo";
import Search from "../../assets/Search";
import Arrow from "../../assets/Arrow";
import SellButton from "../../assets/SellButton";
import SellButtonPlus from "../../assets/SellButtonPlus";
import { AuthContext } from "../../store/FirebaseContext";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/config";

function Header() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo />
        </div>
        <div className="placeSearch">
          <Search />
          <input type="text" />
          <Arrow />
        </div>
        <div className="productSearch">
          <div className="input">
            <input type="text" placeholder="Find car, mobile phone and more..." />
          </div>
          <div className="searchAction">
            <Search color="#ffffff" />
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow />
        </div>
        <div className="loginPage">
          {user ? (
            <span>{user.displayName}</span>
          ) : (
            <span onClick={() => navigate("Login")}>Login</span>
          )}
          <hr />
        </div>
        {user && (
          <span
            onClick={() => {
              signOut(auth).then(() => {
                navigate("/Login");
              });
            }}
          >
            Logout
          </span>
        )}

        {/* Updated sell button navigation */}
        <div
          className="sellMenu"
          onClick={() => {
            if (user) {
              navigate("/create");
            } else {
              navigate("/Login");
            }
          }}
        >
          <SellButton />
          <div className="sellMenuContent">
            <SellButtonPlus />
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
