import React, { useEffect } from "react";
import { Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import BookCard from "../../components/BookCard";
import { fetchBooks } from "../../Thunk/booksThunk";

export default function Home() {
  const dispatch = useDispatch();
  const fetchBooksRecord = useSelector((state) => state.Users.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  return (
    <div className="container-fluid">
      <h1 className="pt-5 pb-5">Book List</h1>
      <Row>
        {fetchBooksRecord.map((record) => (
          <BookCard record={record} />
        ))}
      </Row>
    </div>
  );
}
