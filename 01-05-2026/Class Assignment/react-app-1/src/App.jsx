import React from "react";
import GrandParent from "./PropsComponents/GrandParent";
import ContextComponent from "./ContextComponent/ContextComponent";
import ContextParent from "./ContextComponent/ContextParent";
import Products from "./Products";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <h1>React Practice App</h1>

      <section>
        <h2>Props Demo</h2>
        <GrandParent />
      </section>

      <section>
        <h2>Context API Demo</h2>
        <ContextComponent>
          <ContextParent />
        </ContextComponent>
      </section>

      <section>
        <h2>Products CRUD</h2>
        <Products />
      </section>
    </div>
  );
};

export default App;
