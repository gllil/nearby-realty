import { Container, Row, Col } from "react-bootstrap";
import NearbyCard from "../NearbyCard";

const BulletPoints = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col xs={12} md={6} className="my-3">
          <NearbyCard
            cardIcon={"handshake-angle"}
            title={"Full Support"}
            text={
              "Dedicated agent available at every step of your real estate journey"
            }
          />
        </Col>
        <Col xs={12} md={6} className="my-3">
          <NearbyCard
            cardIcon={"book-open-reader"}
            title={"Industry Experts"}
            text={
              "Expert guidance through property search, negotiations, and paperwork"
            }
          />
        </Col>
        <Col xs={12} md={6} className="my-3">
          <NearbyCard
            cardIcon={"phone-volume"}
            title={"Always Available"}
            text={
              "Responsive assistance for any questions or concerns you have"
            }
          />
        </Col>
        <Col xs={12} md={6} className="my-3">
          <NearbyCard
            cardIcon={"people-group"}
            title={"Support Network"}
            text={
              "Seamless coordination with other professionals like lenders and inspectors"
            }
          />
        </Col>
      </Row>
      {/* <Row>
        <Col>
          <p className="disclaimer text-center">
            * Select services are optional
          </p>
        </Col>
      </Row> */}
    </Container>
  );
};

export default BulletPoints;
