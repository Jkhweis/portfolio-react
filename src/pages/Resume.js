//styles & icons
import './Resume.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';

export default function Resume() {
  return (
    <section className="resume" id="resume">
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
          >
            <FontAwesomeIcon icon={faCertificate} className="cert-icon" />
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
          >
            <FontAwesomeIcon icon={faCertificate} className="cert-icon" />
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
          >
            <FontAwesomeIcon icon={faCertificate} className="cert-icon" />
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
          >
            <FontAwesomeIcon icon={faCertificate} className="cert-icon" />
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
            <FontAwesomeIcon icon={faCertificate} className="cert-icon" />
          </a>
        </div>
      </div>

      <h2>Work Experience</h2>
      <div className="parent">
        <div className="child-year">2017-Present</div>
        <div className="child">Small Business Owner- Online</div>
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
      <h6>Contact: joykhweis@gmail.com</h6>
    </section>
  );
}
