import { useEffect, useRef } from 'react';

//styles & icons
import './About.css';
import { Container, Row, Col } from 'react-bootstrap';

//styles & icons

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

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
        <Col>
          <h2>About Me</h2>
          <p>
            Hello! I am a self-taught Junior React Developer with a passion for
            creating clean, reusable code. I discovered my love of coding during
            the pandemic when I signed up for a SheCodes intro course. Since
            then I have completed all SheCodes courses and have gained
            proficiency in React, with an emphasis on functional components,
            custom hooks, state management, and responsive web design. I
            continue to build new projects regularly, and am currently open to
            freelance and work opportunities. Outside of coding, some of my
            hobbies include viola, gaming, world travel, & Muay Thai Boxing.
          </p>
        </Col>
        <Col>
          <h2>Certificates</h2>
          <div className="parent">
            <div className="child-year">2022</div>
            <div className="child">Build Web Apps with React & Firebase</div>
            <div className="child">Udemy</div>
            <div className="child">
              <a
                href="https://www.udemy.com/certificate/UC-562260bb-a10c-423a-b06b-316a7d030af4/"
                target="_blank"
                rel="noreferrer"
                title="Udemy certificate"
              >
                <FontAwesomeIcon icon={faStar} className="cert-icon" />
              </a>
            </div>
          </div>
          <div className="parent">
            <div className="child-year">2021</div>
            <div className="child">SheCodes Responsive</div>
            <div className="child">
              <a
                href="https://www.shecodes.io/certificates/8d810bca85bf40f5913c18b1dbd870aa"
                target="_blank"
                rel="noreferrer"
                title="SheCodes Certificate"
              >
                <FontAwesomeIcon icon={faStar} className="cert-icon" />
              </a>
            </div>
          </div>
          <div className="parent">
            <div className="child-year">2020</div>
            <div className="child">SheCodes React</div>
            <div className="child">
              <a
                href="https://www.shecodes.io/certificates/b0c8104fcbbaef9ede9d4e9747340f8f"
                target="_blank"
                rel="noreferrer"
                title="SheCodes Certificate"
              >
                <FontAwesomeIcon icon={faStar} className="cert-icon" />
              </a>
            </div>
          </div>
          <div className="parent">
            <div className="child-year">2020</div>
            <div className="child">SheCodes Plus</div>
            <div className="child">
              <a
                href="https://www.shecodes.io/certificates/62c97d94da37f45383d92e118990063e"
                target="_blank"
                rel="noreferrer"
                title="SheCodes certificate"
              >
                <FontAwesomeIcon icon={faStar} className="cert-icon" />
              </a>
            </div>
          </div>
          <div className="parent">
            <div className="child-year">2020</div>
            <div className="child">SheCodes Basics</div>
            <div className="child">
              <a
                href="https://www.shecodes.io/certificates/c38f637d455545bd750636f173aae128"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faStar} className="cert-icon" />
              </a>
            </div>
          </div>
        </Col>
        <Col>
          <h2>Skills</h2>
          <div className="skillist">
            <ul>
              <li>JavaScript</li>
              <li>React State Management</li>
              <li>React Functional Components</li>
              <li>React Hooks & Custom Hooks</li>
              <li>Context</li>
              <li>React Router Dom Version 6</li>
              <li>Firebase authentication, realtime database & hosting</li>
              <li>API's</li>
              <li>Responsive Web Design</li>
              <li>Bootstrap</li>
              <li>HTML5</li>
              <li>CSS3</li>
            </ul>
          </div>
        </Col>

        <h6>Contact: joykhweis@gmail.com</h6>
        <h6>LinkedIn: https://www.linkedin.com/in/joy-khweis-bb91b0198/</h6>
      </Container>
    </section>
  );
}
