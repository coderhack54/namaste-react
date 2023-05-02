const heading= React.createElement("h1",{},"Hello World");
const heading2= React.createElement("h5",{},"HI there");
const root= ReactDOM.createRoot(document.getElementById("root"));
const root2= ReactDOM.createRoot(document.getElementById("root2"));
root.render(heading)
root2.render(heading2)