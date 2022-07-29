import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import headshot from '../images/headshot.jpg';
import './Banner.css';

export default function Banner() {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>{`Hi! I'm Joy Khweis`}</h1>
            <h2>{`Junior React Developer`}</h2>
            <p>Loren ipsum </p>
            <Button variant="info" onClick={() => console.log('connect')}>
              Let's connect <ArrowRightCircle size={25} />
            </Button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headshot} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
