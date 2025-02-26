import React from "react";
import { FaShippingFast, FaPhoneVolume, FaSync } from "react-icons/fa";

export default function Section1() {
  return (
    <div className="section1">
      <div className="section1-content">
        <div className="section1-content-item">
          <div className="icon-style">
            <FaShippingFast />
          </div>
          <div className="shop">
            <h3>Free Shipping</h3>
            <p>When order over $75</p>
          </div>
        </div>

        <div className="section1-content-item">
          <div className="icon-style">
            <FaPhoneVolume />
          </div>
          <div className="shop">
            <h3>24/7 Support</h3>
            <p>Get support all day</p>
          </div>
        </div>

        <div className="section1-content-item">
          <div className="icon-style">
            <FaSync />
          </div>
          <div className="shop">
            <h3>Refund</h3>
            <p>Get refund within 3 days!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
