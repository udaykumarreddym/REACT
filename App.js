import React from "react";
import ReactDOM from "react-dom/client";

//JSX code is transpiled by Parcel (Babel) into React.createElement

//JSX => React.createElement => Object => HTMLElement [render]
const jxshead =  <h1 className="head">Hello World from React using JSX 🚀</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jxshead);

//JSX - Javascript XML - easier to create React Elements