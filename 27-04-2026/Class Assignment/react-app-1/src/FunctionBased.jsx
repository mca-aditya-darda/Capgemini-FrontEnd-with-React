import { useState } from "react";
import ClassBased from "./ClassBased";

function FunctionBased() {
  let a = 20;
  const [b, setB] = useState(0);
  return (
    <>
      <div>
        <h2>This is the H2 in FunctionBased</h2>
      </div>

      {a}
      <br />
      <br />
      <button
        onClick={() => {
          a += 20;
          setB(b + 20);
          console.log(a);
        }}
      >
        Increment
      </button>
      <h1>{b}</h1>
    </>
  );
}
export default FunctionBased;
