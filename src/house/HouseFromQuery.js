import { useContext } from "react";
import { useParams } from "react-router-dom";
import HousesContext from "../context/housesContext";
import House from "./House";

const HouseFromQuery = () => {
  const { id } = useParams();
  const allHouses = useContext(HousesContext);
  const house = allHouses.find((h) => h.id === parseInt(id));

  if (!house) return <div>House not found.</div>;

  return <House house={house} />;
};

export default HouseFromQuery;
