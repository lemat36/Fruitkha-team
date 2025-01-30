import React, { useState, useEffect } from "react";

export default function Section3() {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countdownDate = new Date("2025-02-01T00:00:00").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        return;
      }

      setTime({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleAddToCart = () => {
    console.log("Added to cart");
  };

  return (
    <div className="section3">
      <div className="section3-content">
        <div className="section3-content1">
          <img src="/images/a.jpg" alt="Hikan Strawberry" />
          <div className="cercle-img">
            <h3>30%</h3>
            <p>Off per Kg</p>
          </div>
        </div>

        <div className="section3-content2">
          <h2>
            <span>Deal</span> Of the Month
          </h2>
          <h3>Hikan Strawberry</h3>
          <p>
            Quisquam minus maiores repudiandae nobis, minima saepe id, fugit
            ullam similique! Beatae, minima quisquam molestias facere ea.
            Perspiciatis unde omnis iste natus error sit voluptatem accusantium.
          </p>
          <div className="small-squares">
            <div className="small-square">
              <h3>{time.days}</h3>
              <p>Days</p>
            </div>
            <div className="small-square">
              <h3>{time.hours}</h3>
              <p>Hours</p>
            </div>
            <div className="small-square">
              <h3>{time.minutes}</h3>
              <p>Minutes</p>
            </div>
            <div className="small-square">
              <h3>{time.seconds}</h3>
              <p>Seconds</p>
            </div>
          </div>
          <button className="btn-plus" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
