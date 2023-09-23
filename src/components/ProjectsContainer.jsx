import React from 'react';
import { Link } from 'react-router-dom';

const ProjectsContainer = () => {
    return (
        <section className="projects-container">
            <h2>Projetos</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
                officia consectetur mollitia dolorem eius inventore omnis ex quo natus earum
                iusto at quis commodi sint odio ad recusandae totam doloribus!
            </p>
            <Link to="http://127.0.0.1:5500/portfolio-cesar/src/components/ProjectsPage.html" className="btn">
                Ver Projetos
            </Link>
        </section>
    )
}

export default ProjectsContainer;