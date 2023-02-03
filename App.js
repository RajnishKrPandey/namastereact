import React from 'react';
import ReactDOM from 'react-dom/client';

/**
        Header
           - Logo(Title)
           - Nav Items (Right Side)
           - Cart
        Body
           - Search bar
           - RestaurantList
             - RestaurantCard (Many cards)
               - Image
               - Name
               - Rating
               - Cusines
        Footer
         - links
         - Copyrights
         
       */

const Title = () => (
  <a href="/">
    <img
      className="logo"
      src="https://tse1.mm.bing.net/th?id=OIP._nsBEPa9cV8OUb_96KNxZAHaHa&pid=Api&P=0"
      alt="logo"
    />
  </a>
);

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const dominoPizzas = {
  name: 'Domino Pizzas',
  image:
    'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/a1wyqvlqhfjlguwjgkti',
  cusines: ["Domino's", 'Ranchi'],
  rating: 4.2,
};

const RestaurantCard = () => {
  return (
    <div className="card">
      <img src={dominoPizzas.image} alt="" />
      <h2>{dominoPizzas.name}</h2>
      <h3>{dominoPizzas.cusines.join(',')}</h3>
      <h4>{dominoPizzas.rating} stars</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="restaurant-list">
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
    </div>
  );
};

const Footer = () => {
  return <h4>Footer</h4>;
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);
