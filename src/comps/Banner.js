import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';

export default function Banner() {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`Hi I'm Joy Khweis`}
              <span className="wrap">Web Developer</span>
            </h1>
            <p>Loren ipsum ifh fuwhfuw fuhwuee</p>
            <button onClick={() => console.log('connect')}>
              Let's connect <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={''} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
