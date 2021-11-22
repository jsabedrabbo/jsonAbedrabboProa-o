import { GET_USERS, GET_PROFILE, SEARCH_USERS } from "../types";

export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_USERS:
      return {
        ...state,
        users: payload,
      };
    case GET_PROFILE:
      return {
        ...state,
        selectedUser: payload,
      };
    case SEARCH_USERS:
      return {
        ...state,
        searchedUsers: payload,
      };
    default:
      return state;
  }
};
