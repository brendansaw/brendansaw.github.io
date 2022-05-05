import "./Work.scss";
import GreenlightInnovationLogo from "../../../images/jobs/greenlightinnovation.svg";
import CAROLogo from "../../../images/jobs/caro.png";
import AWSLogo from "../../../images/jobs/aws.png";

function About() {
    document.title = "Brendan Saw - Work"
    return (
        <div className="Work">
            <h1>Work</h1>
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
                                TBD.
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
                </div>
                <div className="section-curved-vertical-flex section-curved-outer">
                    <p><b>Position:</b> Web Developer Co-op</p>
                    <div className="section-curved-vertical-flex">
                        <b>Description:</b>
                        <p>
                            I worked at Greenlight Innovation as a Web Developer Co-op. In this position,
                            I was tasked with writing and testing the main internal web application - the Portal.
                            This application provided ERP functionality for the company, allowing employees to view
                            part shortages and examine KPIs. Additionally, the app also served as the main
                            time-tracking software within the company, and as a result of having all information
                            stored by the web application, was able to provide analytics on the time-tracking
                            information to serve generalized reports to managers and executives.
                        </p>

                        <p>
                            The Portal is written using the Django templating language with assistance from jQuery for
                            front-end interactive features. Django's built-in ORM was utilized to serve data from
                            the PostgreSQL database to the users. Additionally, for any scripts that weren't able to
                            make use of the templating functionalities, the Django REST Framework was used to provide
                            the required data.
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
            <hr/>
            <h2>CARO Analytical Services</h2>
            <section className="section-curved">
                <div className="section-curved-vertical-flex section-curved-outer">
                    <img src={CAROLogo} className="work-img-width" alt="Job Logo"/>
                    <br/>
                    <b className="text-align-left">Extra Information:</b>
                    <ul className="section-curved-ul">
                        <li>Work Period: May 2019 - Aug 2019 (4 months)</li>
                        <li>Location: Richmond, BC</li>
                    </ul>
                </div>
                <div className="section-curved-vertical-flex section-curved-outer">
                    <p><b>Position:</b> IT Support & Admin</p>
                    <div className="section-curved-vertical-flex">
                        <b>Description:</b>
                        <p>
                            I worked at CARO Analytical Services in an IT Support & Admin position. I started working
                            at CARO in summer after I had graduated from high school. At CARO, I assisted with
                            general technical issues around the company.
                        </p>
                    </div>
                    <div className="section-curved-vertical-flex">
                        <b>During my time at the company, I completed the following:</b>
                        <ul className="section-curved-ul">
                            <li>Responded to general technical issues using IT dashboard</li>
                            <li>Wrote script using PowerShell to automatically rename files as per client requests</li>
                            <li>
                                Added and removed users from Active Directory, LIMS (Laboratory Information Management System)
                            </li>
                            <li>Updated old network diagrams</li>
                            <li>Set up Multi-Factor Authentication within the company</li>
                            <li>Set up multiple company devices (monitors, computers, printers)</li>
                            <li>Assisted in diagnosing server errors with senior IT employee</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;