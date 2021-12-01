import { useState } from "react";
import { BrowserRouter, Link, Switch } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import Logout from "../../pages/logout/Logout";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Home from "../../pages/home/Home";
import Login from "../../pages/login/Login";
import Favourites from "../../pages/favourites/Favourites";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
function AppRoutes() {
  const email = useSelector((state) => state.Users.email);
  const [themeMode, setThemeMode] = useState("bg-light");
  const checkThemeMode = (checked) => {
    if (checked) {
      setThemeMode("bg-dark");
    } else {
      setThemeMode("bg-light");
    }
  };

  return (
    <div className={`App ${themeMode} `}>
      <BrowserRouter>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to="/">
              Book App
            </Navbar.Brand>
            <Nav className="me-auto">
              {email ? (
                <>
                  <Nav.Link as={Link} to="/">
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to="/favourites">
                    Favourites
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link as={Link} to="/login">
                    Login
                  </Nav.Link>
                </>
              )}
              {email ? (
                <>
                  <NavDropdown
                    className="dropdown-btn"
                    style={{ marginLeft: "650px" }}
                    title={
                      <img
                        height="30px"
                        src={
                          require("../../assests/images/profile.png").default
                        }
                      />
                    }
                    id="basic-nav-dropdown"
                  >
                    Hello: {email}
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} to="/logout">
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <>
                  <p className="para"> </p>
                </>
              )}
              <BootstrapSwitchButton
                onstyle="primary"
                offstyle="info"
                checked={false}
                onlabel="Dark"
                offlabel="Light"
                onChange={(checked) => {
                  checkThemeMode(checked);
                }}
              />
            </Nav>
          </Container>
        </Navbar>

        <Switch>
          <PrivateRoute component={Logout} exact path="/logout" />
          <PrivateRoute component={Home} exact path="/" />
          <PrivateRoute component={Favourites} exact path="/favourites" />
          <PublicRoute component={Login} exact path="/login" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default AppRoutes;
