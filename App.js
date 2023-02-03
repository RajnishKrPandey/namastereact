import React from 'react';
import ReactDOM from 'react-dom/client';

/**
        Header
           - Logo
           - Nav Items (Right Side)
           - Cart
        Body
           - Search bar
           - RestaurantList
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

const HeaderComponent = () => {
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

const AppLayout = () => {
  return {};
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeaderComponent />);
