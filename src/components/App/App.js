// import logo from './logo.svg';
import './App.scss';
import Home from "../Home/Home";
import About from "../About/About";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import CustomNavbar from "../CustomNavbar/CustomNavbar";
import CustomSidebar from "../CustomSidebar/CustomSidebar";
import Projects from "../Projects/Projects";

function App() {
    return (
        <Router>
            <div className="App">
                <CustomSidebar/>
                <div className="app-body-spacing app-body-background-color">
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Redirect from="/home" to="/"/>
                        <Route path="/projects">
                            <Projects />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
