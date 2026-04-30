import React, { useEffect } from "react";

const ComponentCleanUp = () => {
  useEffect(() => {
    return () => {
      console.log("we are cleaning up the GC");
    };
  }, []);

  return (
    <div style={{ backgroundColor: "navy", color: "white" }}>
      <h1>ComponentCleanUp</h1>
    </div>
  );
};

export default ComponentCleanUp;
