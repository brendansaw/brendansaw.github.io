// import logo from './logo.svg';
import './App.scss';
import Home from "../Home/Home";
import About from "../About/About";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import CustomNavbar from "../CustomNavbar/CustomNavbar";

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
                        <Home />
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
