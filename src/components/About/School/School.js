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
                                    I am currently a {calculateYearNumber()} year SFU student studying Computing Science.
                                    I started at SFU in the semester of Fall 2019 with direct admission into Computing Science
                                    along with a scholarship offer. I was offered the SFU Undergraduate Scholars Entrance
                                    Scholarship with Distinction that covers all tuition and mandatory fees for my undergraduate
                                    degree. <br/>
                                    I currently have a 4.02/4.33 Cumulative GPA and have received the President's and Dean's Honour Roll.
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <div className="school-vert-flex">
                                    <b>The most career-relevant courses that I've taken so far in my university degree are:</b>
                                    <ul className="school-description-ul">
                                        <li>
                                            CMPT 354 - Database Systems I
                                            <ul>
                                                <li>Taught about ER diagrams</li>
                                                <li>Learned SQL commands</li>
                                                <li>Relational algebra</li>
                                            </ul>
                                        </li>
                                        <li>
                                            CMPT 276 - Intro to Software Engineering
                                            <ul>
                                                <li>Learned multiple design patterns and OOP in Java</li>
                                                <li>Unit and integration testing</li>
                                                <li>Industry software development methods, and learned about Agile</li>
                                            </ul>
                                        </li>
                                        <li>
                                            CMPT 295 - Intro to Computer Systems
                                            <ul>
                                                <li>Learned about RISC-V assembly</li>
                                                <li>Created memory allocator using explicit free list</li>
                                            </ul>
                                        </li>
                                        <li>
                                            CMPT 225 - Data Structures and Programming
                                            <ul>
                                                <li>Programmed Skip List, Max Heap, AVL Tree data structures in C++</li>
                                            </ul>
                                        </li>
                                        <li>
                                            CMPT 218 - Special Topics in Computing Science: Client-side Web Systems
                                            <ul>
                                                <li>Wrote web-applications using Angular and TypeScript</li>
                                            </ul>
                                        </li>
                                    </ul>

                                    <b>Some other interesting courses that I've taken are:</b>
                                    <ul className="school-description-ul">
                                        <li>
                                            MACM 316 - Numerical Analysis I
                                            <ul>
                                                <li>Explored effects of perturbations on eigenvalues and condition numbers</li>
                                                <li>
                                                    Created an SEIR model in MATLAB and adjusted model to different R<sub>0</sub> values
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            CMPT 308 - Computability and Complexity
                                            <ul>
                                                <li>Learned about Turing machines, halting problem, decidability, P=NP</li>
                                            </ul>
                                        </li>
                                        <li>
                                            MATH 240 - Algebra I: Linear Algebra
                                            <ul>
                                                <li>Learned about matrices with proofs</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>

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