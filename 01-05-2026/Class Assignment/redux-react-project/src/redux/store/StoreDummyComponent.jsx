import React from "react";
import { store } from "./store";
import { Provider } from "react-redux";
import Counter from "../Component/Counter";
import UserForm from "../Component/UserForm";
const StoreDummyComponent = () => {
  return (
    <>
      <div>StoreDummyComponent</div>
      <Provider store={store}>
        <UserForm />
        {/* <Counter /> */}
      </Provider>
    </>
  );
};

export default StoreDummyComponent;
