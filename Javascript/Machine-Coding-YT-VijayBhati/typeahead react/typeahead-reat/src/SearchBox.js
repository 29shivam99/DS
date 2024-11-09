import { useState } from "react";
import useFetchSearchList from "./useFetchSearchList";
import ItemsList from "./ItemsList";

const SearchBox = (props) => {
  let [query, setQuery] = useState("");
  let [isListVisible, setIsListVisible] = useState(true);
  let [activeItem, setActiveItem] = useState(null);
  let {
    name,
    label,
    placeholder,
    noResults,
    url,
    debounceDelay,
    autoComplete,
    resultantItems,
    styleType,
  } = props;

  console.log(styleType.input);

  function handleKeyPress(e) {
    if (e.key.toLowerCase() === "arrowdown") {
      if (activeItem === null || activeItem === resultList.length - 1) {
        setActiveItem(0);
      } else {
        setActiveItem(activeItem + 1);
      }
    }
    if (e.key.toLowerCase() === "arrowup") {
      if (activeItem === null || activeItem === 0) {
        setActiveItem(resultList.length - 1);
      } else {
        setActiveItem(activeItem - 1);
      }
    }
  }

  let resultList = useFetchSearchList(
    query,
    url,
    debounceDelay,
    autoComplete,
    setActiveItem
  );
  console.log(resultList);
  function handleSearch(e) {
    setQuery(e.target.value);
    setActiveItem(null);
  }
  return (
    <div className="container">
      <label className="label">{label}</label>
      <div className="wrapper">
        <input
          onChange={(e) => handleSearch(e)}
          placeholder={placeholder}
          onFocus={(e) => {
            setIsListVisible(true);
          }}
          onBlur={(e) => {
            setIsListVisible(false);
          }}
          onKeyUp={(e) => handleKeyPress(e)}
        />
        {resultList?.length > 0 && (
          <ItemsList
            items={resultList}
            isListVisible={isListVisible}
            activeItem={activeItem}
            resultantItems={resultantItems}
          />
        )}
        {resultList && resultList.length === 0 && noResults()}
      </div>
    </div>
  );
};

export default SearchBox;
