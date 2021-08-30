// import logo from './logo.svg';
import './App.scss';
import Home from "../Home/Home";
import About from "../About/About";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import CustomNavbar from "../CustomNavbar/CustomNavbar";
import Projects from "../Projects/Projects";

function App() {
    return (
        <Router>
            <div>
                <CustomNavbar />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/home">
                        <Home />
                    </Route>
                    <Route exact path="/projects">
                        <Projects />
                    </Route>
                    <Route exact path="/about">
                        <About />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
