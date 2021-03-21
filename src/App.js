import './App.css';
import Heading from './components/Heading';
import Ul from './components/Ul';
import Increment from './components/Main/Increment';
import Nav from './components/Header/Nav';
import { Route, Link, NavLink, Redirect, Switch, BrowserRouter } from 'react-router-dom';

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
        <div>
            <Nav />
            <div className="container mt-5">
                <BrowserRouter>
                    <Route path="/Increment" exact>
                        <div className="d-flex justify-content-center">
                            <Increment />
                        </div>
                    </Route>
                    <Route path="/" exact>
                        <Heading >
                            Hello world
                    </Heading>
                    </Route>
                    <Route render={() => <h1 >Error Page</h1>} />
                </BrowserRouter>

                <Ul elements={lorems} clickHandler={() => AddLi(lorems[0].value)} ></Ul>
            </div>
        </div>
    );
}

function AddLi(li) {
    console.log(li);
}

export default App;
