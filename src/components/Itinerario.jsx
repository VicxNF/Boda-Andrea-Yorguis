import React from 'react';
import styles from './Itinerario.module.css';

const Itinerario = () => {
  // --- ¡IMPORTANTE! Reemplaza estas direcciones con las reales ---
  const direccionCeremonia = "Avenida Alcalde Castillo Velasco 11095, La Reina, Chile";
  const direccionRecepcion = "Avenida Alcalde Castillo Velasco 11095, La Reina, Chile";

  // Función para generar el enlace de Google Maps
  const generarEnlaceMapa = (direccion) => {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(direccion)}`;
  };

  return (
    <div className={styles.itinerarioContainer}>
      <div className="container">
        <h2 className={styles.titulo}>Agenda del Día</h2>
        <div className={styles.eventosWrapper}>
          
          {/* --- Evento 1: Ceremonia --- */}
          <div className={styles.eventoCard}>
            <div className={styles.icon}>👰🏻🤵🏻</div>
            <h3>Ceremonia</h3>
            <p className={styles.hora}>19:00 HRS</p>
            <p className={styles.lugar}>Terrazas de La Reina</p>
            <a 
              href={generarEnlaceMapa(direccionCeremonia)}
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.mapaButton}
            >
              Cómo llegar
            </a>
          </div>

          <div className={styles.eventoCard}>
            <div className={styles.icon}>🥂</div>
            <h3>Coctel y Fiesta</h3>
            <p className={styles.hora}>20:00 HRS</p>
            <p className={styles.lugar}>Terrazas de La Reina</p>
            <a 
              href={generarEnlaceMapa(direccionRecepcion)} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.mapaButton}
            >
              Cómo llegar
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Itinerario;