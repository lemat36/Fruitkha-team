import React from "react";
import { FaUserShield, FaCalendarAlt } from "react-icons/fa";

export default function Section6() {
  const products = [
    {
      id: 1,
      image: "/images/news-bg-1.jpg",
      title: "You will vainly look for fruit on it in autumn.",
      admin: "Admin",
      date: "29 November 2019",
      description:
        "Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.",
    },
    {
      id: 2,
      image: "/images/news-bg-2.jpg",
      title: "You will vainly look for fruit on it in autumn.",
      admin: "Admin",
      date: "29 November 2019",
      description:
        "Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.",
    },
    {
      id: 3,
      image: "/images/news-bg-3.jpg",
      title: "You will vainly look for fruit on it in autumn.",
      admin: "Admin",
      date: "29 November 2019",
      description:
        "Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.",
    },
  ];

  return (
    <div className="section6">
      <h2>
        <span>Our</span> Products
      </h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam nemo qui
        tenetur quos ab alias animi aperiam ratione ad ducimus.
      </p>
      <div className="section6-content">
        {products.map((product) => (
          <div key={product.id} className="section6-content-item">
            <img src={product.image} alt="fruit" />
            <h3>{product.title}</h3>
            <div className="section6-icons">
              <h3>
                <FaUserShield /> {product.admin}
              </h3>
              <h3>
                <FaCalendarAlt /> {product.date}
              </h3>
            </div>
            <p>{product.description}</p>
            <a href="#">Read More &gt;</a>
          </div>
        ))}
      </div>
      <button className="btn-plus">Add to Cart</button>
    </div>
  );
}
