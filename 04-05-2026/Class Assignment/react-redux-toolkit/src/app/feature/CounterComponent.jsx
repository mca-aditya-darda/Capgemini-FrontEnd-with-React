import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseCount,
  decrementCount,
  fetchUser,
  getOneUser,
} from "./UserSlice";

const CounterComponent = () => {
  const data = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>{data.count}</h2>

      <button onClick={() => dispatch(increaseCount())}>Increment</button>
      <button onClick={() => dispatch(decrementCount())}>Decrement</button>

      <br />
      <br />

      <button onClick={() => dispatch(fetchUser())}>GetUsers</button>

      <hr />

      {data.oneUser && (
        <>
          <p>{data.oneUser.login}</p>
        </>
      )}

      <hr />

      {data.users.map((v) => {
        return (
          <div key={v.id}>
            <p>{v.login}</p>

            <button onClick={() => dispatch(getOneUser(v.login))}>
              getOneuser
            </button>
          </div>
        );
      })}

      {data.loading && <p>Loading...</p>}
      {data.error && <p>{data.error}</p>}
    </div>
  );
};

export default CounterComponent;
