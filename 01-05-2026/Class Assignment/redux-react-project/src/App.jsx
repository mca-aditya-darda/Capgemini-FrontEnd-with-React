import { useState } from "react";
import StoreDummyComponent from "./redux/store/StoreDummyComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <StoreDummyComponent />
    </>
  );
}

export default App;
