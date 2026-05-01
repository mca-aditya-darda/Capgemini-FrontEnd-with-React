import React, { useContext } from "react";
import { contextAPI } from "./ContextComponent";
import {
  getProducts,
  patchProduct,
  postProduct,
} from "../ApiServiceLayer/APIRequests";

const ContextChild = () => {
  let data = useContext(contextAPI);

  return (
    <div>
      <h2>{data.name}</h2>
      <h3>Count: {data.state.count}</h3>

      <button
        onClick={() => {
          data.updateState({ count: data.state.count + 1 });
        }}
      >
        Increment
      </button>

      <button
        onClick={() => {
          data.updateState({ count: data.state.count - 1 });
        }}
      >
        Decrement
      </button>

      <button
        onClick={() => {
          postProduct({ name: "New Product" });
        }}
      >
        Post the Data
      </button>

      <button
        onClick={() => {
          patchProduct({ id: "7bfFoRAO1vU", city: "Ramgudh" });
        }}
      >
        Patch the ID
      </button>

      <button
        onClick={() => {
          getProducts();
        }}
      >
        Get Products
      </button>
    </div>
  );
};

export default ContextChild;
