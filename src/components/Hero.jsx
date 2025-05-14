import React from "react";
import "./Hero.css";
import first from '../assets/first.jpg';
import sec from '../assets/sec.jpg';
import third from '../assets/third.jpg';
import four from '../assets/four.jpg';
import five from '../assets/five.jpg';
import six from '../assets/six.jpg';
import seven from '../assets/seven.jpg';
import eight from '../assets/eight.jpg';
import dem from '../assets/dem.jpg';
import dems from '../assets/dems.jpg';
import demss from '../assets/demss.jpg';


const services = [
  { label: "Same Day Delivery", icon: first },
  { label: "Decorations", icon: sec },
  { label: "Candlelight dinner", icon: third },
  { label: "Personalised Gifts", icon: four },
  { label: "Pre-Wedding", icon: five },
  { label: "Corporate Events", icon: six },
  { label: "Photography", icon: seven },
  { label: "Games & Activities", icon: eight },
];

export default function PreWeddingHero() {
  return (
    <div className="prewedding-container">
      <div className="services-bar">
        {services.map((service, idx) => (
          <div key={idx} className="service-icon">
            <img src={service.icon} alt={service.label} />
            <span className="service-label">{service.label}</span>
          </div>
        ))}
      </div>
<div className="hero-scroll-wrapper">
  <div className="hero-scroll-track">
    <img src={dem} alt="Slide 1" className="hero-slide" />
    <img src={dems} alt="Slide 2" className="hero-slide" />
    <img src={demss} alt="Slide 3" className="hero-slide" />
  </div>
</div>

     
      <h2 className="occasion-title">Make Every Occasion Extra Special</h2>
    </div>
  );
}
