import React from "react";
import { FaPlay, FaQuoteRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

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

  return (
    <div className="section4">
      <div className="avatars">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
        >
          {avatarData.map((avatar) => (
            <SwiperSlide key={avatar.id} className="avatar-item">
              <img src={avatar.imageSrc} alt={avatar.name} />
              <h4>{avatar.name}</h4>
              <p>{avatar.role}</p>
              <p className="quote">{avatar.quote}</p>
              <FaQuoteRight />
            </SwiperSlide>
          ))}
        </Swiper>
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
