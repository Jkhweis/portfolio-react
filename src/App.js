import './App.css';
import Navibar from './comps/Navibar.js';
import Banner from './comps/Banner.js';
import Skills from './comps/Skills.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navibar />
      <Banner />
      <Skills />
    </div>
  );
}

export default App;
