import React from "react";
import { MdNavigateNext } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGlobe,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
export default function Footer() {
  const footerimg = [
    { id: 1, img: "/images/1.png" },
    { id: 2, img: "/images/2.png" },
    { id: 3, img: "/images/3.png" },
    { id: 4, img: "/images/4.png" },
    { id: 5, img: "/images/5.png" },
  ];

  return (
    <div className="footer">
      <div className="footer1">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={4}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
        >
          {footerimg.map((eachFooter) => (
            <SwiperSlide key={eachFooter.id}>
              <img src={eachFooter.img} alt={`Footer ${eachFooter.id}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="footer2">
        <div className="footer2-1">
          <h3>About Us</h3>
          <p>
            Ut enim ad minim veniam perspiciatis <br />
            unde omnis iste natus error sit
            <br />
            voluptatem accusantium doloremque
            <br /> laudantium, totam rem aperiam,
            <br />
            eaque ipsa quae.
          </p>
        </div>

        <div className="footer2-2">
          <h3>Get in Touch</h3>
          <p>34/8, East Hukupara, Gifirtok, Sadan.</p>
          <p>support@fruitkha.com </p>
          <p>+00 111 222 3333</p>
        </div>

        <div className="footer2-3">
          <h3>Pages {"      "}</h3>
          <div className="footer-menu">
            <a href="#">
              <MdNavigateNext size={25} color="orange" /> Home
            </a>
            <a href="#">
              <MdNavigateNext size={25} color="orange" /> About
            </a>
            <a href="#">
              <MdNavigateNext size={25} color="orange" /> Pages
            </a>
            <a href="#">
              <MdNavigateNext size={25} color="orange" /> News
            </a>
            <a href="#">
              <MdNavigateNext size={25} color="orange" /> Contact
            </a>
            <a href="#">
              <MdNavigateNext size={25} color="orange" /> Shop
            </a>
          </div>
        </div>

        <div className="footer2-4">
          <h3>Subscribe</h3>
          <p>
            Subscribe to our mailing list to get the
            <br /> latest updates.
          </p>
          <div className="input-group">
            <input type="email" placeholder="Email" />
            <button>
              <IoIosSend />
            </button>
          </div>
        </div>
        <div className="small-line"></div>
        <div className="last-footer">
          <div>
            <h2>
              Copyrights © 2019 - <span>Savia Yarba</span>, All Rights Reserved.
            </h2>
            <h2>
              Distributed By -<span> Team Comminuty 2</span>
            </h2>
          </div>
          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={20} color="white" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={20} color="white" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={20} color="white" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={20} color="white" />
            </a>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGlobe size={20} color="white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
