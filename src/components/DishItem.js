import React from 'react';
import '../DishItem.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';

const DishItem = ({ dish }) => {
  return (
    <div className="dish-item">
      <Link to={`/dish/${dish.id}`}>
        <img className="dish-image" src={dish.image} alt={dish.name} />
      </Link>
      <div className="dish-details">
        <h3 className="dish-name">
          <Link to={`/dish/${dish.id}`}>{dish.name}</Link>
        </h3>
        <p className="dish-description">{dish.description}</p>
        <p className="dish-rating">Rating: {dish.rating}</p>
        <p className="dish-equipments">
          Equipments: {dish.equipments.join(', ')}
        </p>
      </div>
    </div>
  );
};

export default DishItem;