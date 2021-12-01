import {
  ADD_BOOK_FAV,
  DELETE_BOOK_FAV,
  FETCH_BOOK_DATA,
  RESET_LOGIN_USER,
  SET_LOGIN_USER,
} from "./types";

export const resetLoginUser = () => ({
  type: RESET_LOGIN_USER,
});

export const setLoginUser = (payload) => {
  localStorage.setItem("email", payload.email);
  return { type: SET_LOGIN_USER, payload };
};

export const fetchBooksData = (payload) => {
  return { type: FETCH_BOOK_DATA, payload };
};

export const addBookFav = (payload) => {
  return { type: ADD_BOOK_FAV, payload };
};

export const deleteBookFav = (payload) => {
  console.log(payload, typeof payload);
  return { type: DELETE_BOOK_FAV, payload };
};
