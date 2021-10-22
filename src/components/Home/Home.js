// import logo from './logo.svg';
import './Home.scss';

function Home() {
    return (
        <div className="Home">
            <div className="two-columns">
            <div>
                <img className="profile-picture" src="/github-profile-picture.jpg" alt="Profile"/>
            </div>
            <div className="name-card">
                <h1 className="name-font">Brendan Saw</h1>
                <h3>SFU Computing Science</h3>
            </div>
            </div>
            <hr/>
            <p className="home-paragraph">
                Hi! My name is Brendan and I'm currently a student at Simon Fraser University
                going for a BSc in Computing Science. I'm currently located around the Vancouver area.

                My current interests are:
            </p>
            <table>
                <thead>
                    <th>Computer Science</th>
                    <th>Other</th>
                </thead>
                <tbody>
                    <td>
                        <ul className="center-ul">
                            <li>Web Development</li>
                            <li>Theoretical Computer Science</li>
                            <li>Data Science</li>
                            <li>Scripting</li>
                        </ul>
                    </td>
                    <td>
                        <ul className="center-ul">
                            <li>Investment</li>
                            <li>Crypto</li>
                            <li>Computer Peripherals</li>
                            <li>Taekwondo</li>
                            <li>Public Speaking</li>
                        </ul>
                    </td>
                </tbody>
            </table>

            <p className="home-paragraph">
                You can the the source code for this website as well as many of my other projects on my GitHub.
                Feel free to look around by navigating through the sidebar on the left.
                I can also be reached through my emails
                at <a href="mailto:brendansaw@gmail.com">brendansaw@gmail.com</a> or <a href="mailto:bsaw@sfu.ca">bsaw@sfu.ca</a>.
            </p>




        </div>
    );
}

export default Home;
