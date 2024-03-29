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
                            <li>Java</li>
                            <li>C++</li>
                            <li>Python (Django, Flask)</li>
                            <li>TypeScript (React)</li>
                            <li>SQL (PostgreSQL, MySQL)</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>
                        <b>Learning</b>
                    </td>
                    <td>
                        <ul className="align-left-ul">
                            <li>Ruby</li>
                            <li>Python (Pandas)</li>
                            <li>C</li>
                            <li>JavaScript (jQuery, Angular, Node.js)</li>
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
                            <li>Amazon Web Services</li>
                            <li>Git (GitLab, GitHub)</li>
                            <li>OS (AL2, MacOS, Ubuntu, Windows)</li>
                            <li>Jira/Confluence</li>
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
                            <li>Azure</li>
                            <li>Docker</li>
                            <li>MATLAB</li>
                        </ul>
                    </td>
                </tr>
                </tbody>
            </table>

            <hr/>
            <h2>PDF Resume (Updated Sep 7, 2023)</h2>
            <embed src={ResumePDF} className="pdf-style"/>
            <a href={ResumePDF} target="_blank" rel="noreferrer">View in new tab</a>
        </div>
    );
}

export default About;