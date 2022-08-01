import { Container, Row, Col } from 'react-bootstrap';
import { useEffect, useRef } from 'react';

//styles & icons
import './About.css';

export default function About() {
  const topContainer = useRef();

  // To make sure page starts from the top
  useEffect(() => {
    topContainer.current.scrollIntoView({ block: 'end', behavior: 'smooth' });
  }, []);

  return (
    <section className="about" id="about">
      <div ref={topContainer} />
      <Container>
        <Row>
          <Col xs={12} md={5} xl={6}>
            <h2>{`About Me`}</h2>
            <span className="tagline">
              <p>
                Hello! I am a self-taught aspiring React Developer. I discovered
                my love of coding during the pandemic in 2020 when I signed up
                for a SheCodes course. From there I completed all SheCodes
                courses in JavaScript, React, and Responsive. I also completed
                Shaun Pelling's (The Net Ninja) Udemy Course on React and
                Firebase. I have started building my own projects in React to
                further hone my skills. I am looking to gain more experience
                under the wing of senior developers and am currently seeking
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
                </ul>
              </p>
            </span>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
