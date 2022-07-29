import Navibar from './comps/Navibar.js';
import Banner from './comps/Banner.js';
import Skills from './comps/Skills.js';
import Projects from './comps/Projects.js';

//styles & css
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navibar />
      <Banner />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
