import "./house.css";
import { useState } from "react";
import emailIcon from "./Email.png";
import h2 from "../images/h2.jpg";
import Inquiry from "./Inquiry";

const House = ({ house }) => {
  const [inquiryShown, setInquiryShown] = useState(false);

  const inquiryClick = () => {
    setInquiryShown(!inquiryShown);
  };

  return (
    <div className="house-container">
      <div className="house-header">
        <h5 className="house-country">{house.country}</h5>
        <h3 className="house-address">{house.address}</h3>
      </div>
      <div className="house-content">
        <div className="house-image-container">
          <img src={`${h2}`} alt="House" className="house-image" />
        </div>
        <div className="house-details">
          <p className="house-price">${house.price.toLocaleString()}</p>
          <p className="house-description">{house.description}</p>
          <img src={emailIcon} height="50" alt="inquiry" onClick={inquiryClick} className="inquiry-icon" />
          {inquiryShown && <Inquiry house={house} />}
        </div>
      </div>
    </div>
  );
};

export default House;
