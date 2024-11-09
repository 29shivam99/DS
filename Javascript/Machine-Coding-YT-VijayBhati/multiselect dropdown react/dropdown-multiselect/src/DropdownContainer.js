import "./DropdownContainer.css";
import ListItems from "./ListItems";

const DropdownContainer = ({ cities, setSelectedCities, selectedCities }) => {
  return (
    <div>
      <ul className="list-items-container">
        {cities.map((item, index) => {
          return (
            <div>
              <li key={index}>
                <ListItems
                  item={item}
                  setSelectedCities={setSelectedCities}
                  selectedCities={selectedCities}
                />
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default DropdownContainer;
