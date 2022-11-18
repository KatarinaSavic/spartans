import { createStore } from "redux";

const reducerFn = (
  state = {
    newUser: { name: "", avatar_url: "", bio: "" },
    repositoryList: [{}],
    repositoryID: 0,
  },
  action
) => {
  if (action.type === "foundUser") {
    return {
      ...state,
      newUser: action.payload.newUser,
      repositoryList: [{}],
      repositoryID: 0,
    };
  }
  if (action.type === "repositoryList") {
    return {
      ...state,
      //newUser: action.payload.newUser,
      repositoryList: action.payload,
    };
  }

  if (action.type === "repoID") {
    return {
      ...state,
      //newUser: action.payload.newUser,
      //repositoryList: action.payload,
      repositoryID: action.repositoryID,
    };
  }

  return state;
};
const store = createStore(reducerFn);

export default store;
