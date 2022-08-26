import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Series from "./Series";
import Card from "./Card";

ReactDOM.render(
  <>
    <h1>NETFLIX BEST SERIES IN 2022</h1>,
    {Series.map(function Nflix(value) {
  return (<>
     <Card  
      key={value.id}
      imgsrc={value.imgsrc}
      title={value.title}
      sname={value.sname}
      link={value.link}/> 
    </>
  );
})}
  </>,
  document.getElementById("root"));
