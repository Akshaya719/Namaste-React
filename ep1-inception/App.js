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
const parent = React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"I m an h1 tag"),
        React.createElement("h2",{},"I am an h2 tag")]),

        React.createElement("div",{id:"child2"},
            [React.createElement("h1",{},"I m an h1 tag"),
            React.createElement("h2",{},"I am an h2 tag")],
    ),
);
//JSX

const heading = React.createElement("h1",{id: "heading",xyz:"abc"},"Hello world from React!");
console.log(heading); //object
const root = ReactDOM.createRoot(document.getElementById("root"));
//root where all the react code will run
root.render(parent);
//basically display
//putting heading inside root
//converting this object to a h1 tag
// replace the things which are already inside the root
