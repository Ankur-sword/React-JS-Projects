import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo.jpeg";
import UserIcon from "./UserIcon.jpeg";
// Create Nested header with class "title" Using React.CreateElement

// const header=React.createElement
// ("div",{"class":"title"},
// React.createElement("h1",{},
// React.createElement("h2",{},
// React.createElement("h3",{},
// "This is nesting of Heading using Core React"))));

// Nesting of header using JSX
// const header=(<div className="title">
//   <h1>
//     <h2>
//       <h3>This is Nesting of header using JSX</h3>
//     </h2>
//   </h1>
// </div>);

// Component Composition
// const title = "This is My web page";
// const Sec1 = () => (<h1>Product Name</h1>);
// const Title = () => (
//   <div>
//     <h1>{title}</h1>
//     <h2>
//       <Sec1/>
//     </h2>
//   </div>
// );

// Creating NavBar with Search Bar , Logo and icon
const Search = () => (
  <div className="search-bar">
    <input type="text" placeholder="Search..."></input>
    <input type="submit"></input>
  </div>
);
const logoImg = <img src={logo} alt="Logo" className="logo"></img>;
const User = <img src={UserIcon} alt="User Icon" className="user-icon"></img>;

const Header = () => (
  <div className="header">
    {logoImg}
    <Search />
    {User}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);

//Tutorial Content
// const heading = <h1>Hello JSX 🚀</h1>;

// const Head = () => (

//     <h1>This is functional component</h1>

// );

// const Sec = () => (
//   <div>
//     <Head />
//     <h1>This is section one</h1>
//   </div>
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<Sec />);
