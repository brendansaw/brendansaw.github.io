// import logo from './logo.svg';
import './Home.scss';
import ProfilePicture from "../../images/github-profile-picture.jpg";
import { TypeAnimation } from 'react-type-animation';

function Home() {
    document.title = "Brendan Saw - Home"
    return (
        <div className="Home">
            <div className="two-columns">
            <div>
                <img className="profile-picture" src={ProfilePicture} alt="Profile"/>
            </div>

            <div className="name-card">
                <TypeAnimation className="name-font"
                    sequence={[
                        'Hey! 👋',
                        2000,
                        'My name is Brendan',
                        2000,
                        'Brendan Saw',
                    ]}
                    wrapper="span"
                    speed={50}
                    cursor={false}
                    style={{ fontSize: '2em', display: 'inline-block' }}
                />
            </div>
            </div>
            <hr/>
            <div className="section-curved section-curved-vertical-flex">
                <p className="home-paragraph">
                    Hi! My name is Brendan and I'm a recent graduate of Simon Fraser University.
                    I'm currently based in Vancouver, working at Amazon Web Services in the S3 organization.

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
                            <li>Distributed Systems</li>
                            <li>Parallel Programming</li>
                            <li>Web Development 🌐</li>
                            <li>Data Science 📊</li>
                        </ul>
                    </td>
                    <td>
                        <ul className="center-ul section-curved-ul">
                            <li>Public Speaking 🎤</li>
                            <li>Bouldering 🧗‍</li>
                            <li>Travelling ✈️</li>
                            <li>Stocks 📉</li>
                        </ul>
                    </td>
                    </tbody>
                </table>

                <p className="home-paragraph">
                    You can view the source code for this website as well as many of my other projects on my GitHub.
                    Feel free to look around by navigating through the sidebar on the left.
                    I can also be reached at <a href="mailto:brendansaw@gmail.com">brendansaw@gmail.com</a>.
                </p>
            </div>
        </div>
    );
}

export default Home;
