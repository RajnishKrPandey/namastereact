import React from 'react';
import ReactDOM from 'react-dom/client';

const title = (
  <h1 id="title" key="h2">
    This is just a React element which return JSX
  </h1>
)

const Title = () => (
  <h1 id="title" key="h2">
    This is a functional component by writing () => in React element we can create functional components 
  </h1>
);

const data = api.getData(); //  suppose api hacked and this return malicious code and this is known as xss attack

const HeaderComponent = () => {
  return (
    <div>
      {data} <p>JSX is very secure. JSX takes care you can give it any data It will escape first. It will make sure your app is safe</p>
      <p>JSX does sanitization</p>
      {console.log('WE CAN WRITE ANY PEACE OF JAVASCRIPT CODE HERE ')}
      {1+2}
      {title}      <p> title IS JUST A NORMAL VARIABLE. Rendering React element </p>
      <Title />    <p> Rendering Functional Component and This is known as COMPONENT COMPOSITION</p>
      {Title()}    <p> We can also Render Functional Component like this because at the end It is just a JS function</p>
      <h1>Namaste React Functional Component</h1>
      <h2>This is h2 tage</h2>
    </div>
  );
};


const root = ReactDOM.createRoot(document.getElementById('root'));

//passing a react element inside the root

//async defer
root.render(<HeaderComponent />);
