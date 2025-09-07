// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello World from React!"
// );

// console.log(heading); // Object

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading); // Converts Object to HTML and shows on the screen

const child = React.createElement("div", { id: "child" }, [
  React.createElement("h1", { id: "heading1" }, "I am h1 tag"),
  React.createElement("h2", { id: "heading2" }, "I am h2 tag"),
]);
const child1 = React.createElement("div", { id: "child1" }, [
  React.createElement("h1", { id: "heading3" }, "I am h1 tag"),
  React.createElement("h2", { id: "heading4" }, "I am h2 tag"),
]);

const parent = React.createElement("div", { id: "parent" }, [child, child1 ]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
