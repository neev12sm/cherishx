import React from "react";
import "./ReviewCards.css";

// Sample reviews data
const reviews = [
  {
    name: "Shraddha Sharma",
    verified: true,
    review: "The decoration was very beautiful",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    eventImg: "https://via.placeholder.com/60",
    eventName: "Serengeti Safari Extravaaanza",
    rating: "5.0",
  },
  {
    name: "Paayal Jain",
    verified: true,
    review: "Lovely decoration",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    eventImg: "https://via.placeholder.com/60",
    eventName: "Custom Decoration",
    rating: "5.0",
  },
  {
    name: "Stelly Thomas",
    verified: true,
    review: "Vinay was the person incharge for the decor. The decor was done with perfection. Thank you",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    eventImg: "https://via.placeholder.com/60",
    eventName: "Golden Boho Theme Rina Anniversary Decor",
    rating: "5.0",
  },
  {
    name: "Bhavna Duggal Sachdeva",
    verified: true,
    review: "It was beautiful and well managed",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    eventImg: "https://via.placeholder.com/60",
    eventName: "Birthday Special Balloon Decoration",
    rating: "5.0",
  },
];

export default function ReviewCards() {
  return (
    <div className="review-section">
      <h2 className="review-title">Recent Customer Reviews</h2>
      <div className="review-grid">
        {reviews.map((r, idx) => (
          <div key={idx} className="review-card">
            <img src={r.image} alt={r.name} className="review-avatar" />
            <h3 className="review-name">{r.name}</h3>
            {r.verified && <p className="review-verified">Verified Purchase</p>}
            <p className="review-text">{r.review}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}
