// src/featured-house.js
import React, { useContext } from "react";
import HousesContext from "../context/housesContext";
import House from "../house/House";

const FeaturedHouse = () => {
  const houses = useContext(HousesContext);

  if (!houses || houses.length === 0) {
    return <div>No featured house at this time</div>;
  }

  const featuredHouse = houses[0]; // Assume the first house is the featured one

  return (
    <div>
      <div className="row featuredHouse">
        <h3 className="col-md-12 text-center">Featured house</h3>
      </div>
      <House house={featuredHouse} />
    </div>
  );
};

export default FeaturedHouse;
