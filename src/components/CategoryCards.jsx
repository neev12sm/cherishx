import React from 'react';
import './CategoryCards.css';

import birth from '../assets/birth.jpg';
import bs from '../assets/bs.jpg';
import cd from '../assets/cd.jpg';
import bw from '../assets/bw.jpg';
import hw from '../assets/hw.jpg';
import h from '../assets/h.jpg';
import wa from '../assets/wa.jpg';
import pd from '../assets/pd.avif';

const categories = [
  { label: "Birthday", image: birth },
  { label: "Baby Shower", image: bs },
  { label: "Candlelight Dinner", image: cd },
  { label: "Baby Welcome", image: bw },
  { label: "House Warming", image: hw },
  { label: "Haldi/Mehndi", image: h },
  { label: "Wedding Anniversary", image: wa },
  { label: "Party Decorations", image: pd },
];

export default function CategoryCards() {
  return (
    <div className="category-grid">
      {categories.map((cat, idx) => (
        <div key={idx} className="category-card">
          <img src={cat.image} alt={cat.label} className="category-image" />
          <p className="category-label">{cat.label}</p>
        </div>
      ))}
    </div>
  );
}
