import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { BrowserRouter, Link } from "react-router-dom";


function Headers() {
    const email = useSelector((state) => state.Users.email);
  const [themeMode, setThemeMode] = useState("bg-light");
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
                  <Nav.Link as={Link} to="/logout">
                    Logout
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link as={Link} to="/login">
                    Login
                  </Nav.Link>
                </>
              )}
              <Nav.Link as={Link} onClick={() => setThemeMode("bg-dark")}>
                Dark-Mode
              </Nav.Link>
              <Nav.Link as={Link} onClick={() => setThemeMode("bg-light")}>
                Light-Mode
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        </BrowserRouter>
    </div>
  );
}

export default Headers;
