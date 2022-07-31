import { Col } from 'react-bootstrap';
import './ProjectCard.css';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';

export default function ProjectCard({ title, description, imgUrl, href }) {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <a href={href} target="_blank" alt="project-links">
          <img src={imgUrl} className="each-img" />
        </a>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div>
            <a href={href} target="_blank" alt="project-links">
              <Button variant="light" className="project-btn">
                <ArrowRightCircle size={25} />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
}
