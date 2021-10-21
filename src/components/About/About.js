import "./About.scss";
import {Redirect, Route, Switch, useRouteMatch} from "react-router-dom";
import School from "./School/School";
import Work from "./Work/Work";
import Resume from "./Resume/Resume";


function About() {
    let match = useRouteMatch();
    return (
        <div className="About">
            <Switch>
                <Route path={`${match.path}/school`}>
                    <School/>
                </Route>
                <Route path={`${match.path}/work`}>
                    <Work/>
                </Route>
                <Route path={`${match.path}/resume`}>
                    <Resume/>
                </Route>
                <Redirect from={match.path} to="/"/>
            </Switch>
        </div>
    );
}

export default About;