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

/**
 * Calculate the current academic year based on the current year and the academic year that I started at SFU
 * @returns {string} String that represents the current academic year that I am in
 */
function calculateYearNumber() {
    // constants that represent my starting time at SFU
    const startingYear = 2019;
    const startingMonth = 9;

    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth() + 1;
    let currentAcademicYear = currentYear - startingYear;
    if (startingMonth < currentMonth) {
        currentAcademicYear += 1;
    }

    return getNumberWithOrdinal(currentAcademicYear)
}

/**
 * Source: https://stackoverflow.com/a/31615643
 * @param n Number that we want to generate a string with ordinal for
 * @returns {string} String representing number with ordinal
 */
function getNumberWithOrdinal(n) {
    let s = ["th", "st", "nd", "rd"], v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

export default About;