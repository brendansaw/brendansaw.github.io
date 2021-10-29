import "./ProjectTemplate.scss"

function ProjectTemplate(props) {
    return (
        <section>
            <h2>{props.values.name}</h2>
            <div className="section-curved">
                <div className="section-curved-vertical-flex section-curved-outer">
                    <a href={props.values.img_link} className="project-img-align">
                        <img src={props.values.image_src} className="project-img-width" alt="Project"/>
                    </a>
                    <br/>
                    <b className="text-align-left">Related Links</b>
                    <ul className="section-curved-ul">
                        {props.values.related_links}
                    </ul>
                </div>
                <div className="section-curved-vertical-flex section-curved-outer">
                    <div className="section-curved-vertical-flex">
                        <b>Tech Stack:</b>
                        <ul className="section-curved-ul">
                            {props.values.tech_stack}
                        </ul>
                    </div>
                    <div className="section-curved-vertical-flex">
                        <b>Description:</b>
                        <p>
                            {props.values.description}
                        </p>
                    </div>
                </div>
            </div>
            <br/>
        </section>
    );
}

export default ProjectTemplate;