import React from "react";
import Series from "./Series";
import Card from "./Card";
import Heading from "./Heading";

const App = () => (
  <>
    <Heading />,
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
