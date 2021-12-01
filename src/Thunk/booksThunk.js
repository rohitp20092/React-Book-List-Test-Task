import { fetchBooksData } from "../Redux/usersAction";
import BooksService from "../Services/booksService";


export const fetchBooks = () => async (dispatch) => {
  try {
    const res = await BooksService.fetchAll();
    console.log(res)
    dispatch(fetchBooksData(res.data.items));
  } catch (err) {
    alert(err);
  }
};
