import { useEffect, useRef } from 'react';

//styles & icons
import './About.css';
import { Container, Row, Col } from 'react-bootstrap';

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
                Hello! I am a self-taught aspiring React Developer with a
                passion for creating clean, reusable code. I discovered my love
                of coding during the pandemic in 2020 when I signed up for a
                SheCodes course. I have since completed all SheCodes courses and
                an Udemy course, and have gained proficiency in functional
                components, React hooks, context, async/await, React Router,
                HTML5, CSS3, Firebase, Bootstrap, API's and responsive web
                design. I continue to build new projects regularly to hone my
                skills. I am currently seeking work opportunities as a Junior
                React developer.
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
                  <li>Responsive Web Design</li>
                  <li>Firebase authentication, realtime database & hosting</li>
                  <li>API's</li>
                  <li>Bootstrap</li>
                  <li>HTML5</li>
                  <li>CSS3</li>
                </ul>
              </p>
            </span>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
