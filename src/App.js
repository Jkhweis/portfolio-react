import Navibar from './comps/Navibar.js';
import Contact from './comps/Contact.js';
import ScrollUp from './comps/ScrollUp.js';

//styles & css
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <ScrollUp />
      <Navibar />
      <Contact />
    </div>
  );
}

export default App;
