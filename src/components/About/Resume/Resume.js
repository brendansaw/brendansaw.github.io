import "./Resume.scss";

import ResumePDF from '../../../images/resume/resume.pdf';

function About() {
    document.title = "Brendan Saw - Resume"
    return (
        <div className="Resume">
            <h1>Resume</h1>
            <hr/>
            <h2>Programming Languages & Frameworks</h2>
            <table>
                <tbody>
                <tr>
                    <td>
                        <b>Proficient</b>
                    </td>
                    <td>
                        <ul className="align-left-ul">
                            <li>Python (Django, Flask)</li>
                            <li>JavaScript (jQuery, React)</li>
                            <li>SQL (PostgreSQL, MySQL)</li>
                            <li>Java</li>
                            <li>C++</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>
                        <b>Learning</b>
                    </td>
                    <td>
                        <ul className="align-left-ul">
                            <li>Python (Pandas)</li>
                            <li>C</li>
                            <li>JavaScript (Angular, Node.js)</li>
                            <li>C#</li>
                            <li>.NET (ASP.NET Core)</li>
                            <li>PHP</li>
                        </ul>
                    </td>
                </tr>
                </tbody>
            </table>

            <hr/>
            <h2>Tools</h2>
            <table>
                <tbody>
                <tr>
                    <td>
                        <b>Proficient</b>
                    </td>
                    <td>
                        <ul className="align-left-ul">
                            <li>Jira</li>
                            <li>Confluence</li>
                            <li>Git (GitLab, GitHub)</li>
                            <li>OS (Windows, MacOS)</li>
                            <li>Postman</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>
                        <b>Learning</b>
                    </td>
                    <td>
                        <ul className="align-left-ul">
                            <li>Amazon Web Services</li>
                            <li>Azure</li>
                            <li>Docker</li>
                            <li>MATLAB</li>
                            <li>OS (Linux)</li>
                        </ul>
                    </td>
                </tr>
                </tbody>
            </table>

            <hr/>
            <h2>PDF Resume (Updated Oct 20, 2021)</h2>
            <embed src={ResumePDF} className="pdf-style"/>
            <a href={ResumePDF} target="_blank" rel="noreferrer">View in new tab</a>
        </div>
    );
}

export default About;