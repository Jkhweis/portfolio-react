import { useState, useEffect } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

//styles & icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Navibar.css';

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
      <Navbar expand="md" className={scrolled ? 'scrolled' : ''}>
        <Container>
          <Navbar.Brand href="#home">Joy Khweis</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                as={Link}
                to="/"
                className={
                  activeLink === 'home' ? 'active navbar-link' : 'navbar-link'
                }
                onClick={() => onUpdateActiveLink('home')}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'
                }
                onClick={() => onUpdateActiveLink('skills')}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === 'projects'
                    ? 'active navbar-link'
                    : 'navbar-link'
                }
                onClick={() => onUpdateActiveLink('projects')}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/about"
                className={
                  activeLink === 'about' ? 'active navbar-link' : 'navbar-link'
                }
                onClick={() => onUpdateActiveLink('about')}
              >
                About
              </Nav.Link>
              <Nav.Link
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
                <a href="https://github.com/Jkhweis" target="_blank">
                  <FontAwesomeIcon icon={faGithub} className="github" />
                </a>
                <a
                  href="https://www.linkedin.com/in/joy-khweis-bb91b0198/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="linkedin" />
                </a>
              </div>
              <a
                href="mailto:joykhweis@gmail.com"
                target="_blank"
                rel="noreferrer"
                title="Let's connect"
              >
                <button className="vvd">
                  <span>Let's connect</span>
                </button>
                >
              </a>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/media" element={<Resume />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
