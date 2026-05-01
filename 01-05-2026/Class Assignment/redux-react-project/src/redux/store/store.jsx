import { combineReducers, createStore } from "redux";
import { reducerFunction } from "../reducer/ReducerProvider";
import { userReducer } from "../reducer/UserReducer";
let rootReducer = combineReducers({
  count: reducerFunction,
  user: userReducer,
});
// export let store = createStore(reducerFunction);
export let store = createStore(rootReducer);
