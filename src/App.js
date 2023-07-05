import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import DishItem from './components/DishItem';
import PopularDishItem from './components/PopularDishItem';
import DishDetailsPage from './components/DishDetailsPage';

const App = () => {
  const [data, setData] = useState(null);
  const jsonURL = 'https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/'; // Replace with your JSON URL

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(jsonURL);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <div>
        <h2>Dishes:</h2>
        <Routes>
          {data.dishes.map((dish) => (
            <Route key={dish.id} path={`/dish/${dish.id}`} element={<DishDetailsPage dish={dish} />} />
          ))}
        </Routes>
        {data.dishes.map((dish) => (
          <Link key={dish.id} to={`/dish/${dish.id}`}>
            <DishItem dish={dish} />
          </Link>
        ))}

        <h2>Popular Dishes:</h2>
        {data.popularDishes.map((dish) => (
          <PopularDishItem key={dish.id} dish={dish} />
        ))}
      </div>
    </Router>
  );
};

export default App;
