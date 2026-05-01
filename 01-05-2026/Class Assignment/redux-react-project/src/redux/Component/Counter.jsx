import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementCount, incrementCount } from "../action/ActionProvider";

const Counter = () => {
  let data = useSelector((prev) => prev);
  console.log(data);
  let c = useSelector((prev) => prev.count);
  let dispatch = useDispatch();
  return (
    <>
      <div>Counter</div>
      <h1>{c}</h1>
      <button
        onClick={() => {
          dispatch(incrementCount());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrementCount());
        }}
      >
        Decrement
      </button>
    </>
  );
};

export default Counter;
