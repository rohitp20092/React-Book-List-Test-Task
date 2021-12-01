import {
  ADD_BOOK_FAV,
  DELETE_BOOK_FAV,
  FETCH_BOOK_DATA,
  RESET_LOGIN_USER,
  SET_LOGIN_USER,
} from "./types";

const initialState = {
  users: [],
  email: localStorage.getItem("email"),
  books: [],
  favBook: [],
};

const Users = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN_USER:
      return {
        ...state,
        email: action.payload.email,
      };
    case RESET_LOGIN_USER:
      return {
        ...state,
        email: null,
      };
    case FETCH_BOOK_DATA:
      return {
        ...state,
        books: action.payload,
      };
    case ADD_BOOK_FAV:
      return {
        ...state,
        favBook: [...state.favBook, action.payload.id],
      };
    case DELETE_BOOK_FAV:
      return {
        ...state,
        favBook: [
          ...state.favBook.filter((record) => record !== action.payload),
        ],
      };
    default:
      return state;
  }
};

export default Users;
