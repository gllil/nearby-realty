import { Col, Container, Row } from "react-bootstrap";
import MonthlyPricing from "../MonthlyPricing";
import NearbyCard from "../NearbyCard";
import OptionalServices from "../OptionalServices";
import PerBooking from "../PerBooking";
import "./index.css";

const Pricing = () => {
  return (
    <Container id="pricing">
      <Row>
        <Col>
          <h1 className="text-center my-5 pricing-title">Services</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6} lg={4} className="my-3">
          <NearbyCard title={"Buying"} text={<MonthlyPricing />} />
        </Col>
        <Col xs={12} md={6} lg={4} className="my-3">
          <NearbyCard title={"Selling"} text={<PerBooking />} />
        </Col>
        <Col xs={12} md={12} lg={4} className="my-3">
          <NearbyCard title="Property Management" text={<OptionalServices />} />
        </Col>
      </Row>
      <Row></Row>
    </Container>
  );
};

export default Pricing;
