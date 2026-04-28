import React from "react";
import { useState } from "react";

const ConditionalRendering = () => {
  let [flag, setFlag] = useState(true);

  return (
    <>
      <button
        onClick={() => {
          setFlag(!flag);
        }}
      >
        Change
      </button>

      <div
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: flag ? "green" : "red",
          marginTop: "20px",
        }}
      ></div>
      {flag && <h1>This is true</h1>}
    </>
  );
};

export default ConditionalRendering;
