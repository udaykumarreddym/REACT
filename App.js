import React from "react";
import ReactDOM from "react-dom/client";

const child = React.createElement("div", { id: "child", key: "child" }, [
  React.createElement("h1", { id: "heading1", key: "h1-1" }, "I am h1 tag"),
  React.createElement("h2", { id: "heading2", key: "h2-1" }, "I am h2 tag"),
]);

const child1 = React.createElement("div", { id: "child1", key: "child1" }, [
  React.createElement("h1", { id: "heading3", key: "h1-2" }, "I am h1 tag"),
  React.createElement("h2", { id: "heading4", key: "h2-2" }, "I am h2 tag"),
]);

const parent = React.createElement("div", { id: "parent" }, [child, child1]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
