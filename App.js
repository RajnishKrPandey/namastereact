import React from 'react';
import ReactDOM from 'react-dom/client';

/*
* Created A Server
* HMR - Hot Module Replacement
* File Watcher Algorithms - C++
* BUNDLING
* MINIFY
* Cleaning our Code
* Dev abd Production Build
* Super Fast Build Algorithms
* Image Optimization
* Caching while developement
* Comprehension
* Compatible with older versions of browsers
* HTTPS on dev
* port number
* Consistent Hashing algorithms
* Zero config
* Tree Shaking - Removing unwanted codes
*
*
* Transitive dependencies 
*/

// React.createElement => Object => HTML(DOM)

const heading = React.createElement(
  'h1',
  {
    id: 'title',
    key: 'h1',
  },
  'Namaste React'
);


//JSX => React.createElement => Object => HTML(DOM)

// one line
// const heading2 = <h1>Namaste React2</h1>

// multiple lines
const heading2 = (
  <h1 id='title' key='h2'>
    Namaste React 
  </h1>
);


const root = ReactDOM.createRoot(document.getElementById('root'));

//passing a react element inside the root

//async defer
root.render(heading, heading2);

