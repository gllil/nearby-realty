import { Button, Col, Container, Row } from "react-bootstrap";
import "./index.css";

const TitleSection = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} className="mb-5">
          <h1 className="main-title">Your Trusted Local Real Estate Partner</h1>
          <h3 className="main-subtitle">
            Bringing you closer to your dream home, right in your neighborhood
          </h3>
          <Row>
            <Col className="text-start">
              <Button size="lg" as="a" href="#pricing">
                Learn More
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default TitleSection;
