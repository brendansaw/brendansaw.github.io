// import logo from './logo.svg';
import './App.scss';
import Home from "../Home/Home";
import About from "../About/About";
import {HashRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import CustomSidebar from "../CustomSidebar/CustomSidebar";
import Projects from "../Projects/Projects";
// import Courses from "../Courses/Courses";
import NoMatch from "../NoMatch/NoMatch";
import FifaInvite from "../FifaInvite/FifaInvite";


function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/fifa-invite">
                    <FifaInvite />
                </Route>
                <Route>
                    <div className="App">
                        <CustomSidebar/>
                        <div className="app-body-spacing app-body-background-color app-body-align app-body-font">
                            <Switch>
                                <Route exact path="/">
                                    <Home />
                                </Route>
                                <Redirect from="/home" to="/"/>
                                <Route path="/projects">
                                    <Projects />
                                </Route>
                                {/*<Route path="/courses">*/}
                                {/*    <Courses />*/}
                                {/*</Route>*/}
                                <Route path="/about">
                                    <About />
                                </Route>
                                <Route path="*">
                                    <NoMatch />
                                </Route>
                            </Switch>
                        </div>
                    </div>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
