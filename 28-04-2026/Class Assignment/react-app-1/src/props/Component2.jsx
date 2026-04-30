import React from "react";
import Component3 from "./Component3";

const Component2 = (Props) => {
  console.log(Props);
  //   Object.isFrozen(Props) && console.log("Props is immutable");
  let { num, setNum } = Props;
  return (
    <>
      <div>Component2</div>
      {/* <Component3 info={Props} /> */}
      <h1>The current count of component 2 is {num.count}</h1>
    </>
  );
};

export default Component2;
