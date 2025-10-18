// src/components/PlaylistBoda.jsx
import React from 'react';
import styles from './PlaylistBoda.module.css';

const PlaylistBoda = () => {
  const linkPlaylist = "https://open.spotify.com/playlist/5DCadlmqhHtvaIsX6h2Jr7?si=qL_6DBVGSFiLDwAHuNiwmw&pi=LmIMY_iXSmO8y&pt=ba88949d43ecca4b288225df33fa0a39";

  return (
    <div className={styles.playlistContainer}>
      <div className="container">
        <div className={styles.contentBox}>
          <div className={styles.icon}>🎧</div>
          <h2 className={styles.titulo}>¡Conviértete en el DJ!</h2>
          <p className={styles.descripcion}>
            La música es el alma de la fiesta y queremos que tú seas parte de ella.
            Añade tus canciones favoritas a nuestra playlist de Spotify y ayúdanos a crear momentos inolvidables en la pista de baile.
          </p>
          <a 
            href={linkPlaylist}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Añadir mi Canción
          </a>
        </div>
      </div>
    </div>
  );
};

export default PlaylistBoda;