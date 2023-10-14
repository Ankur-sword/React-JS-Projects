import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Namaste Ankur Pandey"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h5", {}, "Your  h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World From React"
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
