import React, { useState } from "react";
import { postProduct } from "./ApiServiceLayer/APIRequests";

const ProductForm = ({ setCount }) => {
  let [product, setProducts] = useState({});

  function onChangeFunction(e) {
    setProducts((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          postProduct(product);
          setCount((prev) => prev + 1);
        }}
      >
        <div>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={product?.name || ""}
            onChange={onChangeFunction}
          />
        </div>

        <div>
          <input
            type="text"
            name="description"
            placeholder="Enter description"
            value={product?.description || ""}
            onChange={onChangeFunction}
          />
        </div>

        <button>Submit the form</button>
      </form>
    </>
  );
};

export default ProductForm;
