import React, { useState } from 'react';
import Modal from 'react-modal';
import "../styles/components/ProjectsPage.sass";
import Image1 from '../img/LTIP.png';
import Image2 from '../img/ProjetoElétrico.png';
import Image3 from '../img/ProjetoEstrutural.png';
import Image4 from '../img/CoberturaEmTreliça.png';

Modal.setAppElement('#root');

const ProjectsContainer = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setModalIsOpen(false);
  };

  const projects = [
    { id: 1, image: Image1, description: 'Descrição do Projeto 1' },
    { id: 2, image: Image2, description: 'Descrição do Projeto 2' },
    { id: 3, image: Image3, description: 'Descrição do Projeto 3' },
    { id: 4, image: Image4, description: 'Descrição do Projeto 4' },
  ];

  return (
    <section className="projects-container">
      <h2>Projetos</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
        officia consectetur mollitia dolorem eius inventore omnis ex quo natus earum
        iusto at quis commodi sint odio ad recusandae totam doloribus!
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
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Descrição do Projeto"
        style={{
          content: {
            maxWidth: '60%',
            margin: 'auto',
            backgroundColor: '#1d1d1d',
            border: 'none',
            position: 'relative',
            height: '90%', // Defina uma altura fixa para todos os modais
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
            <h3>Descrição do Projeto</h3>
            <p>{selectedProject.description}</p>
          </>
        )}
      </Modal>
    </section>
  );
};

export default ProjectsContainer;


