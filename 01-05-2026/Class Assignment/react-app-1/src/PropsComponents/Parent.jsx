import React from "react";
import Child from "./Child";

const Parent = (props) => {
  return (
    <div>
      <h3>The Surname of the Parent is {props.value.surname}</h3>
      <Child value={props} />
    </div>
  );
};

export default Parent;
