import "./Projects.scss"
import ProjectTemplate from "./ProjectTemplate";
import projects from "./ProjectsList";

function Projects() {
    document.title = "Brendan Saw - Projects"
    const projectsListData = projects;

    return (
        <div className="Projects">
            <h1>Projects</h1>
            <hr/>
            {projectsListData.map((item, index) => {
                return <ProjectTemplate values={item}/>
            })}
        </div>
    );
}

export default Projects;