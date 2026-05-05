import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import CounterComponent from "./app/feature/CounterComponent";

const App = () => {
  return (
    <Provider store={store}>
      <CounterComponent />
    </Provider>
  );
};

export default App;
