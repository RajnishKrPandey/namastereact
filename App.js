import React from 'react';
import ReactDOM from 'react-dom/client';

// REACT ELEMENT
const heading2 = (
  <h1 id="title" key="h2">
    Namaste React
  </h1>
);

// REACT COMPONENT
const HeaderComponent = () => {
  return (
    <div>
      {heading2} 
      <h1>Namaste React Functional Component</h1>
      <h2>This is h2 tage</h2>
    </div>
  );
};


const root = ReactDOM.createRoot(document.getElementById('root'));

//passing a react element inside the root

//async defer
root.render(<HeaderComponent />);
