import './App.css';
import Heading from './components/Main/Heading';
import Ul from './components/Main/Ul';
import Increment from './components/Main/Increment';
import Nav from './components/Header/Nav';
import BootstrapNav from './components/Header/BootstrapNav';
import { Route, Link, NavLink, Redirect, Switch, BrowserRouter, Router } from 'react-router-dom';

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
            <BrowserRouter>
                <BootstrapNav />
                <div className="container mt-5">
                    <Switch>
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
                        <Route path="/Ul" exact>
                            <Ul elements={lorems} clickHandler={() => AddLi(lorems[0].value)} ></Ul>
                        </Route>
                        <Route render={() => <h1 >Error Page</h1>} />
                    </Switch>
                </div>
            </BrowserRouter>
        </>
    );
}

function AddLi(li) {
    console.log(li);
}

export default App;
