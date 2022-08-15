//styles & icons
import './Banner.css';
import headshot from '../images/headshot.jpg';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';

export default function Banner() {
  return (
    <section className="banner">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>Hi! I'm Joy Khweis</h1>
            <h2>Junior React Developer</h2>
            <h4>Based near Chicago, IL</h4>
            <a
              href="mailto:joykhweis@gmail.com"
              target="_blank"
              rel="noreferrer"
              title="Email connect"
            >
              <Button variant="info">
                Let's connect <ArrowRightCircle size={25} />
              </Button>
            </a>
          </Col>
          <Col xs={12} md={6} xl={1}>
            <img src={headshot} alt="Headshot" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
