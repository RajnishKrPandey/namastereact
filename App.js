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

const RestaurantCard = () => {
  return (
    <div className="card">
      <img
        src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/a1wyqvlqhfjlguwjgkti"
        alt=""
      />
      <h2>Domino's Pizza</h2>
      <h3>Domino's, Ranchi</h3>
      <h4>4.2 stars</h4>
    </div>
  );
};

const Body = () => {
  return (
    <RestaurantCard />
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
