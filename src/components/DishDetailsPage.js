import React, { useEffect, useState } from 'react';

const DishDetailsPage = ({ dish }) => {
  const [dishDetails, setDishDetails] = useState(null);
  const detailsURL = 'https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/1'; // Replace with your details JSON URL

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetch(detailsURL);
        const detailsData = await response.json();
        setDishDetails(detailsData);
      } catch (error) {
        console.error('Error fetching details:', error);
      }
    };

    fetchDetails();
  }, []);

  if (!dishDetails) {
    return <div>Loading dish details...</div>;
  }

 const { name, rating, description, timeToPrepare, ingredients, appliances } = dishDetails;

  return (
    <div>
      <h3>{name}</h3>
      <p>Rating: {rating}</p>
      <p>Description: {description}</p>
      <p>Time to Prepare: {timeToPrepare}</p>

      {ingredients && (
        <div>
          <h4>Ingredients:</h4>
          <ul>
            {ingredients.vegetables.map((vegetable) => (
              <li key={vegetable.name}>
                {vegetable.name} - {vegetable.quantity}
              </li>
            ))}
            {ingredients.spices.map((spice) => (
              <li key={spice.name}>
                {spice.name} - {spice.quantity}
              </li>
            ))}
          </ul>
        </div>
      )}

      {appliances && (
        <div>
          <h4>Appliances:</h4>
          <ul>
            {appliances.map((appliance) => (
              <li key={appliance.name}>
                {appliance.name} - <img src={appliance.image} alt={appliance.name} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DishDetailsPage;