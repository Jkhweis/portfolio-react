import './Home.css';

import Banner from '../comps/Banner.js';
import Skills from '../comps/Skills.js';
import Projects from '../comps/Projects.js';

export default function Home() {
  return (
    <section className="home" id="home">
      <div>
        <section id="home">
          <Banner />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
      </div>
    </section>
  );
}
