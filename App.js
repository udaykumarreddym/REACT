const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Uday from React"),
    React.createElement("h2", {}, "Uday from React2"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Uday from React"),
    React.createElement("h2", {}, "Uday from React2"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); 
