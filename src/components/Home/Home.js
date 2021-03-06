// import logo from './logo.svg';
import './Home.scss';
import ProfilePicture from "../../images/github-profile-picture.jpg";

function Home() {
    document.title = "Brendan Saw - Home"
    return (
        <div className="Home">
            <div className="two-columns">
            <div>
                <img className="profile-picture" src={ProfilePicture} alt="Profile"/>
            </div>
            <div className="name-card">
                <h1 className="name-font">Brendan Saw</h1>
                <h3>SFU Computing Science</h3>
            </div>
            </div>
            <hr/>
            <div className="section-curved section-curved-vertical-flex">
                <p className="home-paragraph">
                    Hi! My name is Brendan and I'm currently a student at Simon Fraser University
                    pursuing a BSc. in Computing Science. I'm currently located around the Vancouver area.

                    My current interests are:
                </p>
                <table>
                    <thead>
                    <th>Computer Science</th>
                    <th>Other</th>
                    </thead>
                    <tbody>
                    <td>
                        <ul className="center-ul section-curved-ul">
                            <li>Web Development</li>
                            <li>Theoretical Computer Science</li>
                            <li>Data Science</li>
                            <li>Scripting</li>
                        </ul>
                    </td>
                    <td>
                        <ul className="center-ul section-curved-ul">
                            <li>Investment</li>
                            <li>Computer Peripherals</li>
                            <li>Taekwondo</li>
                            <li>Public Speaking</li>
                        </ul>
                    </td>
                    </tbody>
                </table>

                <p className="home-paragraph">
                    You can view the source code for this website as well as many of my other projects on my GitHub.
                    Feel free to look around by navigating through the sidebar on the left.
                    I can also be reached through my emails
                    at <a href="mailto:brendansaw@gmail.com">brendansaw@gmail.com</a> or <a href="mailto:bsaw@sfu.ca">bsaw@sfu.ca</a>.
                </p>
            </div>
        </div>
    );
}

export default Home;
