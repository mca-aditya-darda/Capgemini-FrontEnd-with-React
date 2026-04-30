import React, { useState } from "react";
import Component1 from "./props/Component1";
import ApiCalling from "./UseEffect/ApiCalling";
import ComponentWithRender from "./ComponentLifeCycle/ComponentWithRender";
import ComponentConstructor from "./ComponentLifeCycle/ComponentConstructor";
import ComponentWithDependency from "./ComponentLifeCycle/ComponentWithDependency";
import ComponentCleanUp from "./ComponentLifeCycle/ComponentCleanUp";

function App() {
  let [count, setCount] = useState(0);

  return (
    <div>
      {/*
      <h2>This is the H2 in APP</h2>
      <ClassBased />
      {new ClassBased().render()}
      <ClassBasedSecond />
      <FunctionBased />
      <ConditionalRendering />
      <ControlledForm />
      */}

      {/* <Component1 /> */}

      {/* <ApiCalling /> */}

      <h2>Count: {count}</h2>

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      {/* <ComponentWithRender /> */}

      {/* <ComponentConstructor /> */}

      {/* <ComponentWithDependency /> */}

      {/* Cleanup example */}
      {!(count % 5 === 0) && <ComponentCleanUp />}
    </div>
  );
}

export default App;
