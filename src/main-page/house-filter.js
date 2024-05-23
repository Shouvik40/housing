import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import HousesContext from "../context/housesContext";
import "./main-page.css"; // Ensure you import the CSS file

const HouseFilter = () => {
  const navigate = useNavigate(); //useHistory changed to useNavigate
  const allHouses = useContext(HousesContext);

  const countries = allHouses ? Array.from(new Set(allHouses.map((h) => h.country))) : [];
  countries.unshift(null);

  const onSearchChange = (e) => {
    const country = e.target.value;
    navigate(`/searchresults/${country}`);
  };

  return (
    <div className="house-filter-container">
      <div className="house-filter-label">Look for your dream house in country:</div>
      <div>
        <select onChange={onSearchChange}>
          {countries.map((c) => (
            <option key={c} value={c}>
              <div style={{ backgroundColor: "red" }}>{c}</div>
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default HouseFilter;
