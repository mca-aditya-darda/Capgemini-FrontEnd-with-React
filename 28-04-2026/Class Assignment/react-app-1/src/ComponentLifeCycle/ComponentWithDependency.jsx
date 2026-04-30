import React, { useEffect, useState } from "react";

const ComponentWithDependency = () => {
  let [count2, setCount2] = useState({
    value: 0,
    name: "Robinhood",
  });

  useEffect(() => {
    console.log("This is coming from dependency");
  }, [count2]);

  return (
    <div>
      <h2>This is Count 2 {count2.value}</h2>

      <button
        onClick={() => {
          setCount2((prev) => ({
            ...prev,
            name: count2.name === "Robinhood" ? "Old Monk" : "Robinhood",
          }));
        }}
      >
        changeName
      </button>

      <button
        onClick={() => {
          setCount2((prev) => ({
            ...prev,
            value: count2.value + 1,
          }));
        }}
      >
        Increment
      </button>

      <h2>{count2.name}</h2>
    </div>
  );
};

export default ComponentWithDependency;
