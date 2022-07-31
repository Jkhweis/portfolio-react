import './Home.css';

import Banner from '../comps/Banner.js';
import Skills from '../comps/Skills.js';
import Projects from '../comps/Projects.js';

export default function Home() {
  return (
    <div>
      <Banner />
      <Skills />
      <Projects />
    </div>
  );
}
