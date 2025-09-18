import React from "react";
import UserIcon from "../assets/icons/user.svg";
import FavouriteIcon from "../assets/icons/favourite.svg";
import CartIcon from "../assets/icons/cart.svg";
import SearchIcon from "../assets/icons/search.svg";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="header">
        <div className="container-h1">
          <h1 className="site-title">E-Commerce</h1>
        </div>

        <div className="search-icons-wrapper">
          <div className="search-container">
            <input type="text" placeholder="Search" />

            <button className="search-btn search-icon">
              <img src={SearchIcon} alt="Search" />
            </button>
            
          </div>

          <div className="icons-container">
            <button className="icon-btn user-icon">
              <img src={UserIcon} alt="User" />
            </button>

            <button className="icon-btn favourite-icon">
              <img src={FavouriteIcon} alt="Favourite" />
            </button>

            <button className="icon-btn cart-icon">
              <img src={CartIcon} alt="Cart" />
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
