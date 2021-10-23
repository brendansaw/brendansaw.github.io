import "./Projects.scss"
import ProjectTemplate from "./ProjectTemplate";
import projects from "./ProjectsList";

function Projects() {
    const projectsListData = projects;

    return (
        <div className="Projects">
            <h1>Projects That I've Created</h1>
            {projectsListData.map((item, index) => {
                return <ProjectTemplate values={item}/>
            })}
        </div>
    );
}

export default Projects;