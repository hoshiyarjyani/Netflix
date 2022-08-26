import React from "react";
import Card from "./Card";
import Series from "./Series";
function App() {
  return (<>
    <h1>NETFLIX BEST SERIES IN 2022</h1>
     <Card  
      imgsrc={Series[0].imgsrc}
      title={Series[0].title}
      sname={Series[0].sname}
      link={Series[0].link}/>
      <Card  
      imgsrc={Series[1].imgsrc}
      title={Series[1].title}
      sname={Series[1].sname}
      link={Series[1].link}/>
      <Card  
      imgsrc={Series[2].imgsrc}
      title={Series[2].title}
      sname={Series[2].sname}
      link={Series[2].link}/>

    </>
  );
}
export default App;
