import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Users } from "../../assests/dummyData";
import { setLoginUser } from "../../Redux/usersAction";
import { Field, reduxForm } from "redux-form";
import { renderInputField,required } from "../../form-validation/reduxFromFields";


function Login(props) {
  const { handleSubmit, pristine, reset, submitting } = props;
  var flag = true;
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = (values) => {
    const formValues = { ...values };
    if (formValues.email && formValues.password) {
      Users.map((record) => {
        if (
          formValues.email === record.email &&
          formValues.password === record.password
        ) {
          flag = false;
          dispatch(setLoginUser({ email: formValues.email }));
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
        <form onSubmit={handleSubmit(onSubmit)} className="my-3">
          <div>
            <div>
              <Field
                name="email"
                type="email"
                component={renderInputField}
                label="Email"
                placeholder=""
                isRequired="true"
                validate={[required]}
              />
            </div>
            <br />
            <div>
              <Field
                name="password"
                type="password"
                component={renderInputField}
                label="Password"
                placeholder=""
                isRequired="true"
                validate={[required]}
              />
            </div>
          </div>
          <br />
          <div className="">
            <div className="text-center">
              <Button type="submit" disabled={pristine || submitting}>
                Submit
              </Button>
            </div>
          </div>
        </form>
      </Container>
    </div>
  );
}

export default reduxForm({
  form: "login",
})(Login);
