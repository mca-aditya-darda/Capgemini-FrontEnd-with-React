import React from "react";

const Component3 = (props) => {
  //   console.log(props.info.info);
  //   console.log(props.info.by);
  //   console.log(props.info.students);
  console.log("======props of component 3======");
  console.log(props);
  let { num, setNum } = props.currentNum;

  return (
    <>
      <div>Component3</div>

      <h1>The current count of component 3 is {num.count}</h1>
    </>
  );
};

export default Component3;
