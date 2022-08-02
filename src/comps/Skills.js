import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

//styles & icons
import './Skills.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faSquareJs } from '@fortawesome/free-brands-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faBootstrap } from '@fortawesome/free-brands-svg-icons';

//animation
import { motion } from 'framer-motion';

export default function Skills() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <motion.div className="item" whileHover={{ scale: 1.15 }}>
                  <FontAwesomeIcon icon={faReact} className="skill-icon" />
                  <p>React.js</p>
                </motion.div>
                <motion.div className="item" whileHover={{ scale: 1.15 }}>
                  <FontAwesomeIcon icon={faSquareJs} className="skill-icon" />
                  <p>JavaScript</p>
                </motion.div>
                <motion.div className="item" whileHover={{ scale: 1.15 }}>
                  <FontAwesomeIcon icon={faHtml5} className="skill-icon" />
                  <p>HTML5</p>
                </motion.div>
                <motion.div className="item" whileHover={{ scale: 1.15 }}>
                  <FontAwesomeIcon icon={faCss3Alt} className="skill-icon" />
                  <p>CSS3</p>
                </motion.div>
                <motion.div className="item" whileHover={{ scale: 1.15 }}>
                  <FontAwesomeIcon icon={faBootstrap} className="skill-icon" />
                  <p>Bootstrap</p>
                </motion.div>
                <motion.div className="item" whileHover={{ scale: 1.15 }}>
                  <FontAwesomeIcon icon={faGithub} className="skill-icon" />
                  <p>Github</p>
                </motion.div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
