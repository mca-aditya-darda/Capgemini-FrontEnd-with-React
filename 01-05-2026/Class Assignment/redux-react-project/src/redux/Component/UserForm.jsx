import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../reducer/UserReducer";

const UserForm = () => {
  let [state, setState] = useState({ name: "" });
  let data = useSelector((prev) => prev);
  console.log(data);
  let dispatch = useDispatch();
  return (
    <>
      <div>
        {data.user.user.map((v, i) => {
          return (
            <div key={i}>
              <h1>{v.name}</h1>

              <button
                onClick={() => {
                  dispatch(removeUser(v.name));
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault(); // prevent reload
            dispatch(addUser(state.name));
          }}
        >
          <input
            type="text"
            name={"name"}
            onChange={(e) => {
              setState({ [e.target.name]: e.target.value });
            }}
          />
          <button>Add User</button>
        </form>
      </div>
    </>
  );
};

export default UserForm;
