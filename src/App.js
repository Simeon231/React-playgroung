import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading';
import Ul from './components/Ul';
import Increment from './components/Increment';

import 'bootstrap/dist/css/bootstrap.min.css';

const lorems = [
  'Anim mollit fugiat enim cupidatat et proident ex non deserunt labore aute et.', 
  'Ad velit irure incididunt excepteur veniam est.',
  'Irure officia commodo aliqua consectetur dolor deserunt enim elit cupidatat culpa pariatur.'];

function App() {
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-center">
        <Increment />
      </div>
    <Heading >
      Hello world
    </Heading>

    <Ul elements={lorems}></Ul>
    </div>
  );
}

export default App;
