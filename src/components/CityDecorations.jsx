import React, { useState } from "react";
import "./CityDecorations.css";

const cities = [
  "Delhi NCR", "Gurugram/Gurgaon", "Noida", "Bangalore", "Hyderabad",
  "Mumbai", "Pune", "Ahmedabad", "Lucknow", "Chennai"
];

const categories = [
  "Birthday Decorations",
  "Party Decorations",
  "Candlelight Dinner",
  "Anniversary Decorations",
  "Baby Shower Celebration",
  "Baby Welcome Decorations",
  "Kids Birthday Celebration",
  "Haldi Decorations",
  "Mehendi Decorations",
];

export default function CityDecorations() {
  const [selectedCity, setSelectedCity] = useState("Gurugram/Gurgaon");

  return (
    <div className="city-decorations-container">
      <h2>Host Your Next Party With Ease</h2>

      <div className="city-tabs">
        {cities.map((city) => (
          <span
            key={city}
            className={`city-tab ${city === selectedCity ? "active" : ""}`}
            onClick={() => setSelectedCity(city)}
          >
            {city}
          </span>
        ))}
      </div>

      <div className="decor-category-list">
        {categories.map((category) => (
          <div key={category} className="decor-category">
            <h4>{category}</h4>
            <p>in {selectedCity.split("/")[0]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
