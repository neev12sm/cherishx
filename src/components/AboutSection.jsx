import React from "react";
import "./AboutSection.css";
import medal from "../assets/medal.avif"; // Add your own images
import google from "../assets/google.avif";
import followers from "../assets/followers.avif";
import brands from "../assets/brands.avif";

export default function AboutSection() {
  return (
    <div className="about-container">
      <h1>
        CherishX – Celebrate Life’s Special Moments with Us
      </h1>
      <p>
        Each celebratory occasion needs a unique touch of excellence. CherishX
        devotes itself to providing memorable experiences for every moment.
        Do you remember the last time you got services tailored for you? Neither
        can we, and that’s exactly why we go above and beyond every single time,
        making sure that every service we offer is truly remarkable. With our
        setup services, every special moment can come to life.
      </p>
      <p>
        In our ten years of operation, we have held many events across India. We
        have served thousands of customers as they created special memories.
        Our dedicated team creates impressive event experiences for our
        customers. We enhance celebrations with balloon decorations and themed
        party decor.
      </p>
      <p className="services-heading">
        Our Services – Fully Customizable For Your Every Event
      </p>
      <p>
        Every event requires a personalized touch to be unique. CherishX provides
        decoration solutions for basic birthday arrangements, anniversary
        decorations, and complete surprise party preparations. Our deep experience
        with multiple event decoration services enhances your special moments on
        all occasions.
      </p>
      <button className="show-more-btn">SHOW MORE</button>

      <div className="stats-section">
        <h2>Event Partner for over 1 Million+ Celebrations</h2>
        <div className="stats-cards">
          <div className="stat-card">
            <img src={medal} alt="Medal" />
            <h4>1 Million+</h4>
            <p>Happy Customers over 10 Years</p>
          </div>
          <div className="stat-card">
            <img src={google} alt="Google Rating" />
            <h4>4.6/5 Rating</h4>
            <p>from 5000+ Reviews on Google</p>
          </div>
          <div className="stat-card">
            <img src={followers} alt="Followers" />
            <h4>1 Lakh+ Followers</h4>
            <p>on Social Media</p>
          </div>
          <div className="stat-card">
            <img src={brands} alt="Top Brands" />
            <h4>Top Brands</h4>
            <p>Partnered with top brands</p>
          </div>
        </div>
      </div>
    </div>
  );
}
