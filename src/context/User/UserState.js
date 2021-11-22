import React, { useReducer } from "react";
import UserReducer from "./UserReducer";
import UserContext from "./UserContext";
import axios from "axios";

const UserState = (props) => {
  const initialState = {
    users: [],
    selectedUser: null,
    searchedUsers: [],
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  const getUsers = async () => {
    const res = await axios.get(
      "https://api.github.com/search/users?q=YOUR_NAME"
    );
    dispatch({
      type: "GET_USERS",
      payload: res.data.items,
    });
  };

  const getProfile = async (id) => {
    const res = await axios.get("https://api.github.com/search/users?q=" + id);
    dispatch({
      type: "GET_PROFILE",
      payload: res.data.items[0],
    });
  };
  const searchUsers = async (id) => {
    const res = await axios.get("https://api.github.com/search/users?q=" + id);
    dispatch({
      type: "SEARCH_USERS",
      payload: res.data.items[0],
    });
  };

  return (
    <UserContext.Provider
      value={{
        users: state.users,
        selectedUser: state.selectedUser,
        searchedUsers: state.searchedUsers,
        getUsers,
        getProfile,
        searchUsers,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
