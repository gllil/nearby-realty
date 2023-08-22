import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import "./index.css";
import NearbyLogo from "../../assets/logos/nearbyrealtylogo.png";
import { useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  return (
    <Navbar collapseOnSelect className="mb-3" key="md" expand="false">
      <Container>
        <Navbar.Brand className="nav-phone">
          <a href="tel:+1-407-349-7533">(407) 349-7533</a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`}>
          <i className="fa-solid fa-bars fa-xl menu-image"></i>
        </Navbar.Toggle>
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-md`}
          aria-labelledby={`offcanvasNavbarLabel-expand-md`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <a href="/" className="d-flex justify-content-center">
              <img src={NearbyLogo} width="60%" />
            </a>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav>
              {/* <Nav.Item className="nav-phone">
              <Nav.Link href="#pricing">
                <h4>Pricing</h4>
              </Nav.Link>
            </Nav.Item> */}
              <Nav.Item
                hidden={location.pathname === "/"}
                className="nav-phone hover-dark-bg"
              >
                <Nav.Link href="/">
                  <h4 className="ml-2">Home</h4>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-phone hover-dark-bg">
                <Nav.Link
                  href="https://nearbypropertymanagement.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h4>Property Management</h4>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-phone hover-dark-bg">
                <Nav.Link
                  href="https://nearbyvacationrentals.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h4>Nearby Vacation Rentals</h4>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-phone hover-dark-bg">
                <Nav.Link href="/contact-us">
                  <h4>Contact Us</h4>
                </Nav.Link>
              </Nav.Item>
              {/* <Nav.Item className="nav-phone">
            <Link to="/forecast" className="nav-link">
              <h4>Forecast Tool</h4>
            </Link>
          </Nav.Item> */}
            </Nav>
          </Offcanvas.Body>
          <Offcanvas.Title className="text-center">
            <h3>
              <a className="mx-auto" href="tel:+1-407-349-7533">
                (407) 349-7533
              </a>
            </h3>
          </Offcanvas.Title>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Navigation;
