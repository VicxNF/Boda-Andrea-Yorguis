import React from 'react';
import styles from './FotosCompartidas.module.css';

const qrCodeImage = '/assets/qr-boda.png'; 

const FotosCompartidas = () => {

  return (
    <div className={styles.fotosContainer}>
      <div className="container">
        <h2 className={styles.titulo}>¡Sé parte de nuestros recuerdos!</h2>
        <p className={styles.descripcion}>
          Ayúdanos a construir el álbum más especial capturando tus momentos favoritos de la boda. 
          Escanea el código QR para subir tus fotos y videos directamente a nuestro álbum compartido.
        </p>
        <img 
          src={qrCodeImage} 
          alt="Código QR para subir fotos de la boda" 
          className={styles.qrCode} 
        />
      </div>
    </div>
  );
};

export default FotosCompartidas;