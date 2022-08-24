import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

//styles & icons
import './Navibar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Nav, Navbar, Container } from 'react-bootstrap';

//pages
import Home from '../pages/Home';
import About from '../pages/About';
import Resume from '../pages/Resume';

export default function Navibar() {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <BrowserRouter>
      <Navbar
        collapseOnSelect
        expand="md"
        className={scrolled ? 'scrolled' : ''}
      >
        <Container>
          <Navbar.Brand>
            {' '}
            <HashLink to="/#home" className="brand-link">
              Joy Khweis
            </HashLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                eventKey="1"
                className={
                  activeLink === 'home' ? 'active navbar-link' : 'navbar-link'
                }
                onClick={() => onUpdateActiveLink('home')}
              >
                <HashLink to="/#home" className="hashlnk">
                  Home
                </HashLink>
              </Nav.Link>
              <Nav.Link
                eventKey="2"
                className={
                  activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'
                }
                onClick={() => onUpdateActiveLink('skills')}
              >
                <HashLink to="/#skills" className="hashlnk">
                  Skills
                </HashLink>
              </Nav.Link>
              <Nav.Link
                eventKey="3"
                className={
                  activeLink === 'projects'
                    ? 'active navbar-link'
                    : 'navbar-link'
                }
                onClick={() => onUpdateActiveLink('projects')}
              >
                <HashLink to="/#projects" className="hashlnk">
                  Projects
                </HashLink>
              </Nav.Link>
              <Nav.Link
                eventKey="4"
                as={Link}
                to="/about"
                className={
                  activeLink === 'about' ? 'active navbar-link' : 'navbar-link'
                }
                id="#about"
                onClick={() => onUpdateActiveLink('about')}
              >
                About
              </Nav.Link>
              <Nav.Link
                eventKey="5"
                as={Link}
                to="/resume"
                className={
                  activeLink === 'resume' ? 'active navbar-link' : 'navbar-link'
                }
                onClick={() => onUpdateActiveLink('resume')}
              >
                Resume
              </Nav.Link>
            </Nav>

            <span className="navbar-text">
              <div className="social-icon">
                <a
                  href="https://github.com/Jkhweis"
                  target="_blank"
                  rel="noreferrer"
                  title="Joy Khweis Github Icon"
                >
                  <FontAwesomeIcon icon={faGithub} className="icon-img" />
                </a>
                <a
                  href="https://www.linkedin.com/in/joy-khweis-bb91b0198/"
                  target="_blank"
                  rel="noreferrer"
                  title="Joy Khweis Linkedin Icon"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="icon-img" />
                </a>
              </div>
              <a
                href="mailto:joykhweis@gmail.com"
                target="_blank"
                rel="noreferrer"
                title="Email connect"
              >
                <button>
                  <span>Let's connect</span>
                </button>
              </a>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
