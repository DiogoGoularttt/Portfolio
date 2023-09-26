import React from 'react';

import "../styles/components/ProjectsPage.sass";

import Image1 from '../img/LTIP.png';
import Image2 from '../img/ProjetoElétrico.png';
import Image3 from '../img/ProjetoEstrutural.png';
import Image4 from '../img/CoberturaEmTreliça.png'

const ProjectsContainer = () => {
    return (
        <section className="projects-container">
            <h2>Projetos</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
                officia consectetur mollitia dolorem eius inventore omnis ex quo natus earum
                iusto at quis commodi sint odio ad recusandae totam doloribus!
            </p>
            {/* <Link to="/projetos" className="btn">
                Ver Projetos
            </Link> */}
            <div className="gallery-container">
                <div className="gallery-items">
                    <img src={Image1} alt="LTIP - Inspeção Predial" />
                </div>

                <div className="gallery-items">
                    <img src={Image2} alt="Projeto Elétrico" />
                </div>

                <div className="gallery-items">
                    <img src={Image3} alt="Projeto Estrutural" />
                </div>

                <div className="gallery-items">
                    <img src={Image4} alt="Cobertura em Treliça" />
                </div>
            </div>

        </section>
    )
}

export default ProjectsContainer;