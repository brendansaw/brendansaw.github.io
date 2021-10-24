import "./NoMatch.scss";


function About() {
    document.title = "Brendan Saw - Page Not Found"
    return (
        <div className="NoMatch">
            <h1>Error: Page Not Found</h1>
        </div>
    );
}

export default About;