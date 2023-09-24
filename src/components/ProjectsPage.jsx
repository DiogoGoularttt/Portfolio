import "../styles/components/ProjectsPage.sass";

import Image1 from '../img/LTIP.png';
import Image2 from '../img/ProjetoElétrico.png';
import Image3 from '../img/ProjetoEstrutural.png';
import Image4 from '../img/CoberturaEmTreliça.png'
const ProjectsPage = () => {

    return (
        <section>
            <header>
                <h1>Projetos</h1>
            </header>

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

            <footer>
                <span>Copyright &copy; | Césaro Trujillo Corrêa</span>
            </footer>
        </section>
    )
};

export default ProjectsPage;