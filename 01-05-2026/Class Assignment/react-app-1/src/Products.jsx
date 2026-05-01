import React, { Fragment, useEffect, useState } from "react";
import { getProducts } from "./ApiServiceLayer/APIRequests";
import ProductForm from "./ProductForm";

const Products = () => {
  let [products, setProducts] = useState([]);
  let [count, setCount] = useState(0);

  useEffect(() => {
    (async () => {
      let res = await getProducts();
      setProducts([...res]);
    })();
  }, [count]);

  return (
    <div>
      <h2>Products List</h2>

      {products.map((v) => {
        return (
          <Fragment key={v.id}>
            <p>{v.name}</p>
          </Fragment>
        );
      })}

      <section>
        <hr />
        <ProductForm setCount={setCount} />
        <hr />
      </section>
    </div>
  );
};

export default Products;
