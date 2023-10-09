import React, { useState } from 'react';
import Modal from 'react-modal';

// Estilos
import '../styles/components/ProjectsPage.sass';

// Imagens da Capa
import Capa1 from '../img/insp_predial.png';
import Capa2 from '../img/ProjetoElétrico.png';
import Capa3 from '../img/ProjetoEstrutural.png';
import Capa4 from '../img/CoberturaEmTreliça.png';

// Imagens das Páginas
// Imagens da Página 1
import Img1P1 from '../img/Img1P1.png';
import Img2P1 from '../img/Img2P1.png';
import Img3P1 from '../img/Img3P1.png';
import Img4P1 from '../img/Img4P1.png';

// Imagens da Página 2
import Img1P2 from '../img/Img1P2.png';
import Img2P2 from '../img/Img2P2.png';
import Img3P2 from '../img/Img3P2.png';
import Img4P2 from '../img/Img4P2.png';
import Img5P2 from '../img/Img5P2.png';

// Imagens da Página 3
import Img1P3 from '../img/Img1P3.png';
import Img2P3 from '../img/Img2P3.png';
import Img3P3 from '../img/Img3P3.png';
import Img4P3 from '../img/Img4P3.png';

// Imagens da Página 4
import Img1P4 from '../img/Img1P4.png';
import Img2P4 from '../img/Img2P4.png';


Modal.setAppElement('#root');

const ProjectsContainer = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalImages, setModalImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (project) => {
    setSelectedProject(project);

    let modalImagesArray = [];

    if (project.id === 1) {
      // Projeto com id 1 terá quatro imagens
      modalImagesArray.push(project.image1, project.image2, project.image3, project.image4);
    } else if (project.id === 2) {
      // Projeto com id 2 terá cinco imagens
      modalImagesArray.push(project.image1, project.image2, project.image3, project.image4, project.image5);
    } else if (project.id === 3) {
      // Projeto com id 3 terá quatro imagens
      modalImagesArray.push(project.image1, project.image2, project.image3, project.image4);
    } else if (project.id === 4) {
      // Projeto com id 4 terá duas imagens
      modalImagesArray.push(project.image1, project.image2);
    }

    setModalImages(modalImagesArray);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setModalImages([]);
    setCurrentImageIndex(0);
    setModalIsOpen(false);
  };

  const nextImage = () => {
    const newIndex = (currentImageIndex + 1 + modalImages.length) % modalImages.length;
    setCurrentImageIndex(newIndex);
  };

  const prevImage = () => {
    const newIndex = (currentImageIndex - 1 + modalImages.length) % modalImages.length;
    setCurrentImageIndex(newIndex);
  };

  const projects = [
    {
      id: 1,
      image: Capa1,
      title: 'LTIP – Laudo Técnico de  Inspeção Predial',
      description: `
      Objetivo: diagnóstico geral sobre o edifício, identificando as anomalias construtivas e falhas de manutenção.
      
      Objeto: Edifício Rembrandt.
      
      Cidade: Porto Alegre/RS.
      
      Uso: residencial.
      
      Ano: 1997.
      
      Capacidade: 60 pessoas;
      
      Ordem de Prioridade para
      gerenciamento de risco: Método GUT`,
      image1: Img1P1,
      image2: Img2P1,
      image3: Img3P1,
      image4: Img4P1,
    },
    {
      id: 2,
      image: Capa2,
      title: 'Projeto Elétrico',
      description: `
      Uma das preocupações em construir
      uma residência é a execução correta
      das instalações elétricas, tendo como
      prioridade o bom funcionamento,
      durabilidade, conforto e, principalmente,
      a segurança.
      Diante disto, este projeto exposto
      obedece ao padrão rígido de normas de
      segurança da NBR5410 - Norma
      Brasileira para Instalações Elétricas de
      Baixa Tensão.`,
      image1: Img1P2,
      image2: Img2P2,
      image3: Img3P2,
      image4: Img4P2,
      image5: Img5P2
    },
    {
      id: 3,
      image: Capa3,
      title: 'Projeto Estrutural',
      description: `
      O projeto estrutural em CA consiste no
      dimensionamento de uma estrutura de
      concreto armado, definindo a rigidez da
      mesma, dimensões de formas, pilares,
      vigas e lajes.
      Para a análise de todas as variáveis
      envolvidas, incluindo forças de vento na
      Edificação, houve a necessidade do uso
      dos principais softwares do mercado:
      Autodesk Robot, Autodesk AutoCAD,
      Ftool, Microsoft Excel.`,
      image1: Img1P3,
      image2: Img2P3,
      image3: Img3P3,
      image4: Img4P3
    },
    {
      id: 4,
      image: Capa4,
      title: 'Cobertura em Treliça',
      description: `
      A adoção de cobertura em formato de
      treliça, geralmente metálica, em um
      projeto requer o estudo das forças de
      veto atuantes no local onde a contrução
      será realizada.
      Dessa forma, para o desenvolvimento
      deste projeto de cobertura fora utilizado
      a NBR6123 que normatiza os  
      procedimentos para as forças devidas ao vento em edificações.`,

      image1: Img1P4,
      image2: Img2P4,
    },
  ];

  return (
    <section className="projects-container">
      <h2>Projetos</h2>
      <p>
        Nesta seção do meu portfólio, convido você a explorar uma cuidadosa seleção de projetos que ilustram minha trajetória
        como engenheiro civil. Cada projeto representa um desafio único que abordei com dedicação e expertise.
      </p>

      <div className="gallery-container">
        {projects.map((project) => (
          <div className="gallery-items" key={project.id}>
            <img
              src={project.image}
              alt={project.description}
              onClick={() => openModal(project)}
            />
          </div>
        ))}
      </div>

      <Modal
        className="modal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Descrição do Projeto"
        style={{
          content: {
            border: 'none'
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
        }}
      >
        {selectedProject && (
          <>
            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '24px',
                color: 'white',
              }}
            >
              &times;
            </button>
            <div className="modal-content">
              <div className="modal-images">
                <img
                  src={modalImages[currentImageIndex]}
                  alt={`Imagem ${currentImageIndex + 1}`}
                  className="modal-image"
                />
              </div>
              <div className="modal-text">
                <h3>{selectedProject.title}</h3>
                <p>
                  {selectedProject.description.split('\n').map((text, index) => (
                    <React.Fragment key={index}>
                      {text}
                      <br />
                    </React.Fragment>
                  ))}
                </p>
              </div>
            </div>
            <div className='btn-next'>
              <button
                onClick={prevImage}
                className="btn-sm" 
              >
                Anterior
              </button>
              <button
                onClick={nextImage}
                className="btn-sm"
              >
                Próxima
              </button>
            </div>
          </>
        )}
      </Modal>
    </section>
  );
};

export default ProjectsContainer;

