//styles & icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Container } from 'react-bootstrap';

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <Container>
        <a
          href="mailto:joykhweis@gmail.com"
          target="_blank"
          rel="noreferrer"
          title="Contact Email"
          className="contact-email"
        >
          <FontAwesomeIcon icon={faEnvelope} className="email-icon" />
        </a>
        <p>joykhweis@gmail.com</p>
        <footer className="footer">
          <p>
            This website was coded by Joy Khweis and it is{' '}
            <a
              href="https://github.com/Jkhweis/portfolio-react"
              target="_blank"
              rel="noreferrer"
              title="Joy Khweis Github"
            >
              open-sourced
            </a>{' '}
            on Github
          </p>
          <p>© 2024 Joy Khweis</p>
        </footer>
      </Container>
    </section>
  );
}
