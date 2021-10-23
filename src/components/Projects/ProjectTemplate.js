import "./ProjectTemplate.scss"

function ProjectTemplate(props) {
    return (
        <section>
            <hr/>
            <h2>{props.values.name}</h2>
            <div className="project-section">
                <div className="project-section-vertical-flex project-section-outer">
                    <img src={props.values.image_src} className="project-img-width" alt="Project"/>
                    <br/>
                    <b className="text-align-left">Related Links</b>
                    <ul className="project-section-ul">
                        {props.values.related_links}
                    </ul>
                </div>
                <div className="project-section-vertical-flex project-section-outer">
                    <div className="project-section-vertical-flex">
                        <b>Tech Stack:</b>
                        <ul className="project-section-ul">
                            {props.values.tech_stack}
                        </ul>
                    </div>
                    <div className="project-section-vertical-flex">
                        <b>Description:</b>
                        <p>
                            {props.values.description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProjectTemplate;