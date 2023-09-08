import "./School.scss";
import SFULogo from "../../../images/SFU_horizontal_logo_rgb.png";
import IBLogo from "../../../images/dp-programme-logo-en.png";

function About() {
    document.title = "Brendan Saw - School"
    return (
        <div className="School">
            <h1>School</h1>
            <hr/>
            <h2>
                Overview
            </h2>
            <div className="school-description-flex">
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <img src={SFULogo} alt="SFU Logo" className="school-img-size"/>
                            </td>
                            <td>
                                <p>
                                    I graduated in Spring 2023 from SFU with a BSc in Computing Science.
                                    I started at SFU in the semester of Fall 2019 with direct admission into Computing Science
                                    along with a scholarship offer. I was offered the SFU Undergraduate Scholars Entrance
                                    Scholarship with Distinction that covers all tuition and mandatory fees for my undergraduate
                                    degree. <br/><br/>
                                    I graduated First Class with Distinction, with a
                                    <b> 4.03/4.33 CGPA</b> and received the President's and Dean's Honour Roll multiple times.
                                    <br/><br/>
                                    Courses Taken: Distributed Systems, Databases, Software Engineering,
                                    Operating Systems, Data Structures, Artificial Intelligence,
                                    Functional Programming, Computer Systems
                                </p>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <img src={IBLogo} alt="IB Diploma Programme Logo" className="school-img-size"/>
                            </td>
                            <td>
                                I went to Port Moody Secondary School which offered the International Baccalaureate Program -
                                a preparatory program for students aiming to go into higher education.
                                I was enrolled into the IB Diploma Programme after taking a high school
                                entrance exam, and as a result of completing and obtaining this diploma, I received
                                30 transfer credits to SFU from my achievements in IB.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default About;