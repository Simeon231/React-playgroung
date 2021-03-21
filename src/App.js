import './App.css';
import Heading from './components/Heading';
import Ul from './components/Ul';
import Increment from './components/Main/Increment';
import Nav from './components/Header/Nav';

import 'bootstrap/dist/css/bootstrap.min.css';

const lorems = [
    {
        id: "l1",
        value: 'Anim mollit fugiat enim cupidatat et proident ex non deserunt labore aute et.',
    },
    {
        id: "l2",
        value: 'Ad velit irure incididunt excepteur veniam est.',
    },
    {
        id: "l3",
        value: 'Irure officia commodo aliqua consectetur dolor deserunt enim elit cupidatat culpa pariatur.'
    }];

function App() {
    return (
        <>
            <Nav />
            <div className="container mt-5">
                <div className="d-flex justify-content-center">
                    <Increment />
                </div>
                <Heading >
                    Hello world
                </Heading>

                <Ul elements={lorems} clickHandler={() => AddLi(lorems[0].value)} ></Ul>
            </div>
        </>
    );
}

function AddLi(li) {
    console.log(li);
}

export default App;
