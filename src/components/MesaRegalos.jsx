// src/components/MesaRegalos.jsx
import React from 'react';
import styles from './MesaRegalos.module.css';

const MesaRegalos = () => {
  const linkListaDeNovios = "https://milistadenovios.cl/lista/andreyyor";

  return (
    <div className={styles.regalosContainer}>
      <div className="container">
        <div className={styles.contentBox}>
          <h2 className={styles.titulo}>Porque todo regalo suma sonrisas</h2>
          <div className={styles.icon}>🎁</div>
          <p className={styles.descripcion}>
          Con tu presencia nos basta, pero si además quieres hacernos un regalito, te dejamos nuestra lista de novios.
          </p>
          <a 
            href={linkListaDeNovios}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Ver Lista de Sueños
          </a>
        </div>
      </div>
    </div>
  );
};

export default MesaRegalos;