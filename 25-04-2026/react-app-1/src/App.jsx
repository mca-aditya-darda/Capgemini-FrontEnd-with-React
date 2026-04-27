import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Demo from "./Demo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>this is a react project</h1>
        <hr />
        {/* <h1>{Demo()}</h1> */}
        {Demo()}
        <hr />
        <Demo />
      </div>
    </>
  );
}

export default App;
