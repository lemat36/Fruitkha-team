import React from "react";

export default function Section2() {
  const products = [
    {
      id: 1,
      name: "Strawberry",
      price: "$10.00",
      imageSrc: "/images/product-img-1.jpg",
      altText: "Fresh strawberries",
    },
    {
      id: 2,
      name: "Grapes",
      price: "$15.00",
      imageSrc: "/images/product-img-2.jpg",
      altText: "Fresh grapes",
    },
    {
      id: 3,
      name: "Lemon",
      price: "$20.00",
      imageSrc: "/images/product-img-3.jpg",
      altText: "Fresh lemon",
    },
  ];

  const handleAddToCart = (product) => {
    console.log(`${product} added to cart`);
  };

  return (
    <div className="section2">
      <h2>
        <span>Our</span> Products
      </h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam nemo qui
        tenetur quos ab alias animi aperiam ratione ad ducimus.
      </p>

      <div className="section2-content">
        {products.map((product) => (
          <div key={product.id} className="section2-content-item">
            <img src={product.imageSrc} alt={product.altText} />
            <h3>{product.name}</h3>
            <h4>Per Kg</h4>
            <p>{product.price}</p>
            <button
              className="btn-plus"
              onClick={() => handleAddToCart(product.name)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
