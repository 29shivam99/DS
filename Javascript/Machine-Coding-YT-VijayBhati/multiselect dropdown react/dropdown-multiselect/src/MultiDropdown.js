import { useState } from "react";
import "./MultiDropdown.css";
import { cities } from "./constants";
import DropdownContainer from "./DropdownContainer";

const MultiDropdown = () => {
  let [isExpanded, setIsExpanded] = useState(null);
  let [selectedCities, setSelectedCities] = useState([]);

  function handleBarClick() {
    if (isExpanded === null) setIsExpanded(true);
    setIsExpanded(!isExpanded);
  }

  return (
    <div className="container">
      <div className="bar" onClick={(e) => handleBarClick()}>
        {selectedCities.length > 0
          ? `${selectedCities.length} Items Selected`
          : ""}
      </div>
      {isExpanded && (
        <DropdownContainer
          cities={cities}
          setSelectedCities={setSelectedCities}
          selectedCities={selectedCities}
        />
      )}
    </div>
  );
};

export default MultiDropdown;
