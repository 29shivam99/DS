import "./ListItems.css";

const ListItems = ({ item, setSelectedCities, selectedCities }) => {
  function handleInputlick(e) {
    if (e.target.checked) {
      setSelectedCities([...selectedCities, e.target.value]);
    } else {
      setSelectedCities(selectedCities.filter((name) => name !== item));
    }
    console.log(selectedCities);
  }

  return (
    <fieldset className="list-item">
      <input
        type="checkbox"
        name={item}
        value={item}
        id={item}
        onChange={(e) => {
          handleInputlick(e);
        }}
        checked={selectedCities.includes(item)}
      />
      <label htmlFor={item}>{item}</label>
    </fieldset>
  );
};

export default ListItems;
