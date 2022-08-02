import ProjectCard from './ProjectCard.js';

//styles & images
import './Projects.css';
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
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
      description:
        'Users can send and delete messages in chat room. Created with React and utilizes Google auth, custom hooks, context, Firebase realtime database, React Router, Framer Motion, & Howler ',
      imgUrl: chatapp,
      href: 'https://chat-app-561bf.web.app/',
    },
    {
      id: 2,
      title: 'React Project Management Site',
      description:
        'Users can add new projects & comments, sort projects, & view online user list. Created with React and utilizes Firebase auth, custom hooks, context, Firebase realtime database, React Router, & Date-fns ',
      imgUrl: projectmgmt,
      href: 'https://the-dojo-react-15a17.web.app/signup',
    },

    {
      id: 3,
      title: 'React Dictionary App',
      description:
        'Searches for a word to display definition, phonetics, examples, synonyms and photos. Created with React and utilizes dictionary API & Pexels photo API.',
      imgUrl: dictionary,
      href: 'https://reverent-davinci-c69fde.netlify.app/',
    },
    {
      id: 4,
      title: 'React Weather App',
      description:
        'Enter a city to display the current temperature and forecast in 3-hour increments. Created with React and utilizes weather data API.',
      imgUrl: weather,
      href: 'https://elated-dijkstra-a36404.netlify.app/',
    },
    {
      id: 5,
      title: 'Vanilla JS Weather App',
      description:
        'Enter a city to display the current temperature and convert between Celsius and Fahrenheit. Created with Vanilla JavaScript and utilizes weather data API.',
      imgUrl: vanillaweather,
      href:
        'https://www.shecodes.io/workshops/shecodes-plus-19-0/projects/78686',
    },
  ];

  return (
    <section className="project">
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
