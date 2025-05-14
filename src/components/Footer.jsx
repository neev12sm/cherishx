import React from "react";
import "./Footer.css";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaFileAlt,
  FaUser,
  FaMoneyCheckAlt,
  FaTags,
  FaBlogger,
  FaInfoCircle,
  FaQuoteRight,
  FaSitemap,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterestP,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section">
          <h3>Need Help ?</h3>
          <ul>
            <li><FaWhatsapp /> WhatsApp Us</li>
            <li><FaPhoneAlt /> Call Us</li>
            <li><FaFileAlt /> Terms & Conditions</li>
            <li><FaUser /> Privacy Policy</li>
            <li><FaMoneyCheckAlt /> Payments & Refund Policy</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Important Links</h3>
          <ul>
            <li><FaTags /> Offers</li>
            <li><FaBlogger /> Blog</li>
            <li><FaInfoCircle /> About Us</li>
            <li><FaQuoteRight /> Wishes & Quotes for Occasions</li>
            <li><FaSitemap /> Sitemap</li>
          </ul>
        </div>
      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom">
        <h3>Spread The Love</h3>
        <div className="social-icons">
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
          <FaPinterestP />
          <FaLinkedinIn />
          <FaYoutube />
        </div>
        <p>© Infureka Technologies Private Limited</p>
      </div>
    </footer>
  );
};

export default Footer;
