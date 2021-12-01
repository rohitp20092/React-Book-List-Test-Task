import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Users } from "../../assests/dummyData";
import { setLoginUser } from "../../Redux/usersAction";


export default function Signup() {
  var flag = true;
  const dispatch = useDispatch();
  const history = useHistory();
  const submitHandler = (e) => {
    e.preventDefault();
    if (e.target.email.value && e.target.password.value) {
      Users.map((record) => {
        if (
          e.target.email.value === record.email &&
          e.target.password.value === record.password
        ) {
          flag = false;
          dispatch(setLoginUser({ email: e.target.email.value }));
          history.push("/");
        }
      });
      if (flag) {
        alert("Invaild email or password");
      }
    } else {
      alert("invalid input");
    }
  };
  return (
    <div className="col-3 mx-auto">
      <br />
      <h1>Login Page</h1>
      <br />
      <br />
      <Container>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}
