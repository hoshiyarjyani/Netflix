import React from "react";
import Series from "./Series";
import Card from "./Card";

const App = () => (
  <>
    <h1>NETFLIX BEST SERIES IN 2022</h1>,
    {Series.map(function Nflix(value) {
      return (
        <Card
          key={value.id}
          imgsrc={value.imgsrc}
          title={value.title}
          sname={value.sname}
          link={value.link}
        />
      );
    })}
  </>
);

export default App;