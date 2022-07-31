import { Container, Row, Col } from 'react-bootstrap';

//styles & icons
import './About.css';

export default function About() {
  return (
    <section className="about" id="about">
      <Container>
        <Row>
          <Col xs={12} md={5} xl={6}>
            <h2>{`About Me`}</h2>
            <span className="tagline">
              <p>
                Hello! I am a self-taught React Developer with a passion for
                creative thinking and clean code. I discovered my love of coding
                during the pandemic in 2020 when I signed up for a SheCodes
                course. After that, I completed all SheCodes courses in
                JavaScript, React, and Responsive. I also completed Shaun
                Pelling's (The Net Ninja) Udemy Course on React and Firebase. I
                have started building my own projects in React to further hone
                my skills. I am looking to gain more experience under the wing
                of senior developers and am currently seeking apprenticeship or
                work opportunities.
              </p>
            </span>
          </Col>
          <Col xs={12} md={5} xl={6}>
            <h2>{`Skills`}</h2>
            <span className="tagline">
              <p>
                <ul>
                  <li>React Functional Components</li>
                  <li>React Hooks (useState, useEffect, useRef, useReducer)</li>
                  <li>Custom Hooks</li>
                  <li>Context</li>
                  <li>React Router Dom Version 6</li>
                  <li>Firebase authentication, realtime database & hosting</li>
                  <li>API's</li>
                  <li>Bootstrap</li>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <br />
                  <br />
                </ul>
              </p>
            </span>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
