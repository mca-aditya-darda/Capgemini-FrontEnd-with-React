import React, { useEffect } from "react";

const ComponentConstructor = () => {
  useEffect(() => {
    console.log("This is from useEffect (runs once)");
  }, []);

  return <div>ComponentConstructor</div>;
};

export default ComponentConstructor;
