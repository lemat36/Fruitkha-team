import React from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
export default function Header() {
  return (
    <div className="header">
      <div className="cover"></div>

      <div className="menu-header">
        <div className="logo-header">
          <img src="/images/log.png" alt="logo" />
        </div>

        <div className="menu">
          <a href="#" className="active">
            Home
          </a>
          <a href="#">About</a>
          <a href="#">Pages</a>
          <a href="#">News</a>
          <a href="#">Contact</a>
          <a href="#">Shop</a>
        </div>

        <div className="icons">
          <FaSearch size={15} color="white" />
          <FaShoppingCart size={15} color="white" />
        </div>
      </div>

      <div className="content">
        <h3>Fresh & Organic</h3>
        <p>Delicious Seasonal Fruits</p>
        <div className="btn">
          <button className="btn-plus">Fruits Collection</button>
          <button className="btn-plus-plus">Contact Us</button>
        </div>
      </div>
    </div>
  );
}
