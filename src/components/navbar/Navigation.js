import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navigation.css";
import { useStateValue } from "../../redux/StateProvider";

function NavScrollExample() {
  const [{ card_item }, dispatch] = useStateValue();

  return (
    <Navbar bg="light" expand="lg" className="px-5">
      <Container fluid className="px-5">
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#home" className="px-3">
              HOME
            </Nav.Link>
            <Nav.Link href="#about" className="px-3">
              ABOUT
            </Nav.Link>

            <NavDropdown
              title="JOBS"
              id="navbarScrollingDropdown"
              className="px-3"
            >
              <NavDropdown.Item href="#">JOB A</NavDropdown.Item>
              <NavDropdown.Item href="#">JOB B</NavDropdown.Item>
              <NavDropdown.Item href="#">JOB C</NavDropdown.Item>
              <NavDropdown.Item href="#">JOB D</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#salon" className="px-3">
              SALON LISTINGS
            </Nav.Link>
            <Nav.Link href="#market_place" className="px-3">
              MARKET PLACES
            </Nav.Link>
            <Nav.Link href="#academy" className="px-3">
              ACADEMY
            </Nav.Link>
            <Nav.Link href="#cart" className="px-3 badgeCount">
              <img
                src="https://img.icons8.com/ios-filled/100/000000/shopping-cart.png"
                alt="cart"
                style={{ width: 29, height: 29 }}
              />
              {card_item.length > 0 && (
                <div className="badgeCss"> {card_item.length} </div>
              )}
            </Nav.Link>
            <NavDropdown title="MY ACCOUNT" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#help">HELP</NavDropdown.Item>
              <NavDropdown.Item href="#logout">LOGOUT</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
