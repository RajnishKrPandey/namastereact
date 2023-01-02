import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
    "h1",
    {
      id: "title",
    },
    "Heading 1"
  );
  
  const heading2 = React.createElement(
    "h2",
    {
      id: "title",
    },
    "Heading 2"
  );

  const para1 = React.createElement(
    "p",
    {
      id: "title",
    },
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis nulla eos magnam animi harum nobis omnis quasi nostrum odit iure?"
  );

  const para2 = React.createElement(
    "p",
    {
      id: "title",
    },
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero exercitationem saepe error eaque. Hic unde sequi fugiat doloribus voluptatum sint quaerat mollitia magnam quos ipsum accusantium excepturi laudantium, similique reiciendis?"
  );
  
  const container = React.createElement(
    "div",
    {
      id: "container",
    },
    [heading, heading2, para1, para2]
  );
  
  console.log(heading);
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  
  //passing a react element inside the root
  
  //async defer
  root.render(container);