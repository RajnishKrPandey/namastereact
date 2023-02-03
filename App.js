import React from 'react';
import ReactDOM from 'react-dom/client';

const heading2 = (
  <h1 id="title" key="h2">
    Namaste React
  </h1>
);

// React Component
// - Functional - NEW

// IN ONE LINE
const HeaderComponent1 = () => {
  return <div><h1>Namaste React Functional Component</h1><h2>This is h2 tage</h2></div> 
}

// IN MULTIPLE LINES
const HeaderComponent2 = () => {
  return (
    <div>
      <h1>Namaste React Functional Component</h1>
      <h2>This is h2 tage</h2>
    </div>
  );
};

// WE CAN WRITE NORMAL FUNCTION ALSO
const HeaderComponent3 = function () {
  return (
    <div>
      <h1>Namaste React Functional Component</h1>
      <h2>This is h2 tage</h2>
    </div>
  );
};


// IN MULTIPLE LINES WE WRITE MOSTLY THIS TYPES OF CODE
const HeaderComponent4 = () => (
  <div>
      <h1>Namaste React Functional Component</h1>
      <h2>This is h2 tage</h2>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

//passing a react element inside the root

//async defer
root.render(heading, heading2);
