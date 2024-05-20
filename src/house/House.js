import "./house.css";
import { useState } from "react";
import emailIcon from "./Email.png";
import Inquiry from "./Inquiry";

const House = ({ house }) => {
  const [inquiryShown, setInquiryShown] = useState(false);

  const inquiryClick = () => {
    setInquiryShown(!inquiryShown);
  };

  return (
    <div className="house-container">
      <div className="row mt-2">
        <h5 className="col-md-12">{house.country}</h5>
      </div>
      <div className="row">
        <h3 className="col-md-12">{house.address}</h3>
      </div>
      <div className="row">
        <div className="col-md-7">
          <img src={`/images/${house.photo}.jpeg`} alt="House" className="house-image" />
        </div>
        <div className="col-md-5">
          <p className="price">${house.price.toLocaleString()}</p>
          <p>{house.description}</p>
          <img src={emailIcon} height="50" alt="inquiry" onClick={inquiryClick} className="inquiry-icon" />
          {inquiryShown && <Inquiry house={house} />}
        </div>
      </div>
    </div>
  );
};

export default House;
