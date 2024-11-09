import { useState } from "react";

const ItemsList = ({ items, isListVisible, activeItem }) => {
  // let [activeItem, setActiveItem] = useState(null);
  console.log(activeItem);
  return (
    isListVisible && (
      <ul className="list-items-wrapper">
        {items.map((item, index) => {
          return (
            <li
              key={index}
              className={`list-item ${
                activeItem === index ? "active-item" : ""
              }`}
            >
              {item.name}
            </li>
          );
        })}
      </ul>
    )
  );
};

export default ItemsList;
