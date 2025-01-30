import React, { useState, useEffect } from "react";
import { FaPlay, FaQuoteRight } from "react-icons/fa";

export default function Section4() {
  const avatarData = [
    {
      id: 1,
      name: "Saira Hakim",
      role: "local shop owner",
      quote:
        "Sed ut perspiciatis unde omnis iste natus error veritatis et quasi architecto beatae vitae dicta eaque ipsa quae ab illo inventore.",
      imageSrc: "/images/avatar1.png",
    },
    {
      id: 2,
      name: "Navid Niph",
      role: "local shop owner",
      quote:
        "Sed ut perspiciatis unde omnis iste natus error veritatis et quasi architecto beatae vitae dicta eaque ipsa quae ab illo inventore.",
      imageSrc: "/images/avatar2.png",
    },
    {
      id: 3,
      name: "Jacob Sikim",
      role: "local shop owner",
      quote:
        "Sed ut perspiciatis unde omnis iste natus error veritatis et quasi architecto beatae vitae dicta eaque ipsa quae ab illo inventore.",
      imageSrc: "/images/avatar3.png",
    },
  ];

  const [currentAvatarIndex, setCurrentAvatarIndex] = useState(0);

  const showNextAvatar = () => {
    setCurrentAvatarIndex((prevIndex) => (prevIndex + 1) % avatarData.length);
  };

  useEffect(() => {
    const intervalId = setInterval(showNextAvatar, 4000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="section4">
      <div className="avatars">
        {avatarData.map((avatar, index) => (
          <div
            key={avatar.id}
            className={`avatar-item ${
              index === currentAvatarIndex ? "active" : "hidden"
            }`}
          >
            <img src={avatar.imageSrc} alt={avatar.name} />
            <h4>{avatar.name}</h4>
            <p>{avatar.role}</p>
            <p className="quote"> {avatar.quote}</p>
            <FaQuoteRight />
          </div>
        ))}
      </div>

      <div className="section4-content">
        <div className="video">
          <img src="/images/abt.jpg" alt="video" />
          <div className="cover-plus"></div>
          <a
            href="https://youtu.be/bEPRxLzDiyo?si=4qelI6b2raqDppoG"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaPlay />
          </a>
        </div>

        <div className="section4-content-text">
          <h6>since Year 1999</h6>
          <h2>
            We are <span>Fruikha</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            minus maiores repudiandae nobis, minima saepe id, fugit ullam
            similique!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            minus maiores repudiandae nobis, minima saepe id, fugit ullam
            similique!
          </p>
          <button className="btn-plus">Know More</button>
        </div>
      </div>
    </div>
  );
}
