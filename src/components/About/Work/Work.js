import "./Work.scss";
import GreenlightInnovationLogo from "../../../images/jobs/greenlightinnovation.svg";
import CAROLogo from "../../../images/jobs/caro.png";
import AWSLogo from "../../../images/jobs/aws.png";

function About() {
    document.title = "Brendan Saw - Work"
    return (
        <div className="Work">
            <h1>Work Experience</h1>
            <hr/>
            <h2>Amazon Web Services</h2>
            <section className="section-curved">
                <div className="section-curved-vertical-flex section-curved-outer">
                    <img src={AWSLogo} className="work-img-width" alt="Job Logo"/>
                    <br/>
                    <b className="text-align-left">Extra Information:</b>
                    <ul className="section-curved-ul">
                        <li>Work Period: May 2022 - Aug 2022 (4 months)</li>
                        <li>Location: Vancouver, BC</li>
                    </ul>
                    <b className="text-align-left">Languages:</b>
                    <ul className="section-curved-ul">
                        <li>TBD</li>
                    </ul>
                </div>
                <div className="section-curved-vertical-flex section-curved-outer">

                    <p><b>Position:</b> Software Development Engineer Intern</p>
                    <div className="section-curved-vertical-flex">
                        <b>Description:</b>
                        <p>
                            I am working in the AWS S3 Lifecycle team in Vancouver.
                        </p>
                    </div>
                    <div className="section-curved-vertical-flex">
                        <b>During my time at the company, I completed the following:</b>
                        <ul className="section-curved-ul">
                            <li>
                                TBD
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <hr/>
            <h2>Greenlight Innovation</h2>
            <section className="section-curved">
                <div className="section-curved-vertical-flex section-curved-outer">
                    <img src={GreenlightInnovationLogo} className="work-img-width" alt="Job Logo"/>
                    <br/>
                    <b className="text-align-left">Extra Information:</b>
                    <ul className="section-curved-ul">
                        <li>Work Period: May 2021 - Dec 2021 (8 months)</li>
                        <li>Location: Burnaby, BC</li>
                    </ul>
                    <b className="text-align-left">Languages:</b>
                    <ul className="section-curved-ul">
                        <li>Python
                            <ul>
                                <li>Django</li>
                                <li>Pandas</li>
                                <li>NumPy</li>
                                <li>PyUnit</li>
                            </ul>
                        </li>
                        <li>JavaScript
                            <ul>
                                <li>jQuery</li>
                                <li>React</li>
                            </ul>
                        </li>
                        <li>SQL
                            <ul>
                                <li>PostgreSQL</li>
                                <li>SQL Server</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="section-curved-vertical-flex section-curved-outer">
                    <p><b>Position:</b> Web Developer Co-op</p>
                    <div className="section-curved-vertical-flex">
                        <b>Description:</b>
                        <p>
                            I worked at Greenlight Innovation as a Web Developer Co-op. In this position,
                            I was tasked with writing and testing the main internal web application - the Portal,
                            which provided ERP functionality for the company.
                        </p>
                    </div>
                    <div className="section-curved-vertical-flex">
                        <b>During my time at the company, I completed the following:</b>
                        <ul className="section-curved-ul">
                            <li>
                                Developed a tool within the Portal that allows managers and executives to view
                                time-tracking data per Supply Chain project, department, team, employee and time period
                            </li>
                            <li>
                                Tested and fixed bugs for other applications within the Portal project
                            </li>
                            <li>
                                Set up unit and integration testing for the Portal using Django's extension of PyUnit
                            </li>
                            <li>
                                Implemented Sphinx auto-documentation to generate HTML files based on code comments;
                                enforced reStructuredText commenting syntax for functions
                            </li>
                            <li>Assisted in manual deployment to production server</li>
                            <li>Assisted in setting up Git and GitLab; pushed for greater usage of PR reviews</li>
                            <li>Led in setting up Jira and Confluence for the team</li>
                        </ul>
                    </div>
                </div>
            </section>
            <br/>
        </div>
    );
}

export default About;