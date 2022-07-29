import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <Container>
        <a
          href="mailto:joykhweis@gmail.com"
          target="_blank"
          title="Contact Email"
          className="contact-email"
        >
          <div>
            <FontAwesomeIcon icon={faEnvelope} className="email-icon" />
            <p>joykhweis@gmail.com</p>
          </div>
        </a>
        <footer className="footer">
          <p>
            This website was coded by Joy Khweis and it is{' '}
            <a
              href="https://github.com/Jkhweis/chat-app-react"
              target="_blank"
              title="Joy Khweis Github"
            >
              open-sourced
            </a>{' '}
            on Github
          </p>
        </footer>
      </Container>
    </section>
  );
}
