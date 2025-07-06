import React from "react";
import ReactDOM from "react-dom/client";

/**
 * <div id="parent">
 * <div id="child">
 * <h1>I m a h1 tag</h1>
 * <h2>I m a h2 tag </h2> convert to an array if u want to pass more than one children
 * <div id="child 2">
 * <h1>I m h1 tag </h1>
 * <h2>I m h2 tag </h2>
 * </div>
 * </div>
 * ReactElement(Object) => HTML(Browser Understands)
 */
// const parent = React.createElement("div",{id:"parent"},
//     React.createElement("div",{id:"child"},
//         [React.createElement("h1",{key:"h1"},"I m an h1 tag"),
//         React.createElement("h2",{key:"h2"},"I am an h2 tag")]),

//         React.createElement("div",{id:"child2"},
//             [React.createElement("h1",{key:"h3"},"I m an h1 tag"),
//             React.createElement("h2",{key:"h4"},"I am an h2 tag")],
//     ),
// );
// //JSX

// const heading = React.createElement("h1",{id: "heading",xyz:"abc"},"Hello world from React!");
// console.log(heading); //object
// const root = ReactDOM.createRoot(document.getElementById("root"));
// //root where all the react code will run
// root.render(parent);
//basically display
//putting heading inside root
//converting this object to a h1 tag
// replace the things which are already inside the root



//React.createElement => Object => HTML Element(render)
// const heading = React.createElement("h1",{id:"heading"},"Namaste React ");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

//JSX HTML XML syntax
//easier to create react elements


//JSX transpiled before it reaches to the js engine  PARCEL -Babel
//transpile means convert to code which browser or react can understand

//JSX => React.createElement =>ReactElement-JS Object => HTML Element(render)
const jsxHeading = (<h1 id="heading" className="head" tabIndex ="1">
    Namaste React using JSX </h1>);
//not pure js
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);





