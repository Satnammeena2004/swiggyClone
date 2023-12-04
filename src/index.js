import React from "react";
import ReactDOM from "react-dom/client";



const headings = React.createElement("h1", {id:"Jai"}, "First React Element");
const headings2 = React.createElement("h1", {className:"jai2"}, "SEocnsd React Element");
const container = React.createElement("div",{id:"container"},[headings,headings2]);

function Comp1({chil}){
    const headings3 = React.createElement("h1", {className:"jai2"}, "Third React Element");
    return [headings3,chil];
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render([<Comp1 chil={headings2} />]);
