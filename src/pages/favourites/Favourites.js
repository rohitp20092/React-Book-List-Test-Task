import React, { useEffect } from "react";
import { Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import BookCard from "../../components/BookCard";
import { fetchBooks } from "../../Thunk/booksThunk";

export default function Favourites() {
  const dispatch = useDispatch();
  const fetchBooksRecord = useSelector((state) => state.Users.books);
  const favBooklist = useSelector((state) => state.Users.favBook);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  return (
    <div className="container-fluid">
      <h1 className="pt-5 pb-5">Favourite Book List</h1>
      <Row>
        {fetchBooksRecord.map((record) =>
          favBooklist.includes(record.id) ? <BookCard record={record} /> : ""
        )}
      </Row>
    </div>
  );
}
