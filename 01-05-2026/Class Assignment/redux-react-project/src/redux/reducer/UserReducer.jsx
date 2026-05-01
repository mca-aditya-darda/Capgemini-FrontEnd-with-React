let initialState = {
  user: [
    {
      name: "Abhishek",
    },
    {
      name: "Shetty",
    },
    {
      name: "RajKumar",
    },
  ],
};
export function addUser(name) {
  return {
    type: "addUser",
    payload: { name },
  };
}
export function removeUser(name) {
  return {
    type: "removeUser",
    payload: name,
  };
}
export function userReducer(state = initialState, action) {
  switch (action.type) {
    case "removeUser": {
      return {
        ...state,
        user: state.user.filter((v) => v.name != action.payload),
      };
    }
    case "addUser": {
      return {
        ...state,
        user: [...state.user, action.payload],
      };
    }
    default: {
      return state;
    }
  }
}
