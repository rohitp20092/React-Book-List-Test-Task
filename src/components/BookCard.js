import { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addBookFav, deleteBookFav } from "../Redux/usersAction";

function BookCard({ record }) {
  const dispatch = useDispatch();
  const [selectBook, setSelectBook] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const favBooklist = useSelector((state) => state.Users.favBook);
  return (
    <>
      <div className="col-3">
        <Card className="mx-auto my-2" style={{ width: "18rem" }}>
          {favBooklist.includes(record.id) ? (
            <button
              onClick={() => dispatch(deleteBookFav(record.id.toString()))}
              className="favbook-btn"
              type="submit"
            >
              <img
                height="40px"
                src={require("../assests/images/logo.png").default}
              />
            </button>
          ) : (
            <button
              onClick={() => dispatch(addBookFav(record))}
              className="favbook-btn"
              type="submit"
            >
              <img
                height="40px"
                src={require("../assests/images/logo2.png").default}
              />
            </button>
          )}
          <Card.Img
            height="300px"
            variant="top"
            src={`http://books.google.com/books/content?id=${record.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
          />
          <Card.Body>
            <Card.Title> {record.volumeInfo.title}</Card.Title>
            <Card.Text className="mb-2 mt-3">
              <b>Author: {record.volumeInfo.authors}</b>
            </Card.Text>
            <Card.Text>
              <b>Category: {record.volumeInfo.categories}</b>
            </Card.Text>

            <Button
              variant="warning"
              onClick={() => {
                setSelectBook(record);
                handleShow();
              }}
            >
              Show Description
            </Button>
          </Card.Body>
        </Card>
        {selectBook ? (
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{selectBook.volumeInfo.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
              <img
                height="200px"
                src={`http://books.google.com/books/content?id=${selectBook.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
              />
              <h5>{selectBook.volumeInfo.authors}</h5>
              <h6>{selectBook.volumeInfo.categories}</h6>
              <b>Description-</b>
              {selectBook.volumeInfo.description}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default BookCard;
