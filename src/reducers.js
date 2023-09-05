import {
  CHANGE_SEARCH_FIELD,
  FETCH_ROBOTS_FAILED,
  FETCH_ROBOTS_PENDING,
  FETCH_ROBOTS_SUCCESS,
} from "./constants";

const initialState = {
  searchField: "",
  robotList: [],
  isPending: false,
  error: "",
};

export const searchRobots = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};

export const fetchRobots = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_ROBOTS_PENDING:
      return { ...state, isPending: true };
    case FETCH_ROBOTS_SUCCESS:
      return { ...state, robotList: action.payload, isPending: false };
    case FETCH_ROBOTS_FAILED:
      return { ...state, error: action.payload, isPending: false };
    default:
      return state;
  }
};
