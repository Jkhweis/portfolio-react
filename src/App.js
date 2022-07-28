import Navibar from './comps/Navibar.js';
import Banner from './comps/Banner.js';
import Skills from './comps/Skills.js';

//styles & css
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

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
