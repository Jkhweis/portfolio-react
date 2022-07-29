import './Projects.css';
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import ProjectCard from './ProjectCard.js';

//images
import vanillaweather from '../images/vanillaweather.png';
import weather from '../images/weather.png';
import dictionary from '../images/dictionary.png';
import chatapp from '../images/chatapp.png';
import projectmgmt from '../images/projectmgmt.png';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'React Chat App',
      description: 'Blah Blah',
      imgUrl: chatapp,
      href: 'https://chat-app-561bf.web.app/',
    },
    {
      id: 2,
      title: 'React Project Management Site',
      description: 'Blah Blah',
      imgUrl: projectmgmt,
      href:
        'https://the-dojo-react-15a17.web.app/projects/9nAKc8mDYRFAg6Ld0lLo',
    },
    {
      id: 3,
      title: 'React Firegram',
      description: 'Blah Blah',
      imgUrl: dictionary,
      href: 'https://joykhweis-firegram.web.app/',
    },
    {
      id: 4,
      title: 'React Dictionary App',
      description:
        'A dictionary application displaying a words definition, phonetics, examples, synonyms and photos. Created utilizing React, dictionary API, phonetics API, and photo API.',
      imgUrl: dictionary,
      href: 'https://reverent-davinci-c69fde.netlify.app/',
    },
    {
      id: 5,
      title: 'React Weather App',
      description:
        'A weather application displaying the current temperature and forecast in 3-hour increments. Created utilizing React and weather data API.',
      imgUrl: weather,
      href: 'https://elated-dijkstra-a36404.netlify.app/',
    },
    {
      id: 6,
      title: 'Vanilla JS Weather App',
      description: 'Blah Blah',
      imgUrl: vanillaweather,
      href:
        'https://www.shecodes.io/workshops/shecodes-plus-19-0/projects/78686',
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>

            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.slice(0, 3).map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {projects.slice(3, 6).map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
