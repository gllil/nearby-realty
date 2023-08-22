import { Container, Image, Row, Col } from "react-bootstrap";
import fullLogo from "../../assets/logos/nearbylogowhite.png";
import "./index.css";

const Header = () => {
  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-center  w-100">
          <Image src={fullLogo} width="100%" className="page-logo" />
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
