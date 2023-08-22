import BulletPoints from "../../components/BulletPoints";
import Contact from "../../components/Contact";
// import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Pricing from "../../components/Pricing";
import TitleSection from "../../components/TitleSection";
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <Header />
          </Col>
          <Col xs={12} md={6}>
            <TitleSection />
          </Col>
        </Row>
        <Row>
          <BulletPoints />
        </Row>
        <Row>
          <Pricing />
        </Row>
        <Row>
          <Contact />
        </Row>
      </Container>
    </div>
  );
};

export default Home;
