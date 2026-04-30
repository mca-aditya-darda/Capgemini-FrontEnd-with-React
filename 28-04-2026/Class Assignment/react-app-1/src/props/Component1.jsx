import React, { useState } from "react";
import Component2 from "./Component2";
import Component3 from "./Component3";

const Component1 = () => {
  let [num, setNum] = useState({ count: 0 });
  return (
    <>
      <div>Component1</div>
      <h1>The current count is {num.count}</h1>
      {/* <Component2
        by="aditya"
        students={["Ram", "Shyam", "Savita"]}
        info={{ course: "React" }}
      /> */}
      <Component2 {...{ num, setNum }} />
      <Component3 currentNum={{ num, setNum }} />
      <button onClick={() => setNum({ count: num.count + 1 })}>
        Increment
      </button>
    </>
  );
};

export default Component1;
