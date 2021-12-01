import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { resetLoginUser } from "../../Redux/usersAction";

export default function Logout() {
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetLoginUser());
    localStorage.removeItem("email");
    alert("You are SuccessFully LogOut");
    history.push("/login");
  }, [dispatch, history]);

  return <div></div>;
}
