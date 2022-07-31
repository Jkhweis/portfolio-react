import './Resume.css';
import { Container, Row, Col } from 'react-bootstrap';

export default function Resume() {
  return (
    <section className="resume" id="resume">
      <Container>
        <h1>Resume</h1>
        <h2>Education</h2>
        <div className="parent">
          <div className="child-year">2006-2010</div>
          <div className="child">DePaul University</div>
          <div className="child">Chicago, IL</div>
        </div>
        <p>Bachelor of Arts in Japanese Studies</p>
        <div className="parent">
          <div className="child-year">2008-2009</div>
          <div className="child">Kansai Gaidai University</div>
          <div className="child">Hirakata City, Japan</div>
        </div>
        <p>Intensive Study Abroad Program</p>
        <h2>Certifications</h2>
        <div className="parent">
          <div className="child-year">2022</div>
          <div className="child">Build Web Apps with React & Firebase</div>
          <div className="child">Udemy</div>
        </div>
        <div className="parent">
          <div className="child-year">2021</div>
          <div className="child">SheCodes Responsive</div>
        </div>
        <div className="parent">
          <div className="child-year">2020</div>
          <div className="child">SheCodes React</div>
        </div>
        <div className="parent">
          <div className="child-year">2020</div>
          <div className="child">SheCodes Plus</div>
        </div>
        <div className="parent">
          <div className="child-year">2020</div>
          <div className="child">SheCodes Coding</div>
        </div>

        <h2>Work Experience</h2>
        <div className="parent">
          <div className="child-year">2017-Present</div>
          <div className="child">Small Business Owner- Online Shop</div>
          <p>Wonderment Bath</p>
        </div>
        <div className="parent">
          <div className="child-year">2018-2021</div>
          <div className="child">Sales Account Manager</div>
          <div className="child">Mundelein, IL</div>
          <p>International Equipment Trading Ltd.</p>
        </div>
        <div className="parent">
          <div className="child-year">2014-2017</div>
          <div className="child">Sales Assistant</div>
          <div className="child">Wheeling, IL</div>
          <p>Kyowa Industrial Co. Ltd.</p>
        </div>
        <div className="parent">
          <div className="child-year">2012-2013</div>
          <div className="child">Assistant Language Teacher</div>
          <div className="child">Kumamoto, Japan</div>
          <p>Japan Exchange and Teaching Program (JET)</p>
        </div>
        <div className="parent">
          <div className="child-year">2010-2012</div>
          <div className="child">Operations Team Lead</div>
          <div className="child">Northbrook, IL</div>
          <p>Teavana</p>
        </div>
      </Container>
    </section>
  );
}
