import React from 'react';
import '../PopularDishItem.css'; // Import the CSS file for styling

const PopularDishItem = ({ dish }) => {
  return (
    <div className="popular-dish-item">
      <img
        className="popular-dish-image"
        src={dish.image}
        alt={dish.name}
      />
      <h3 className="popular-dish-name">{dish.name}</h3>
    </div>
  );
};

export default PopularDishItem;
