import React from 'react';
import styles from './ConfirmationModal.module.css';

const ConfirmationModal = ({ isOpen, onClose, success, message }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2 className={success ? styles.successTitle : styles.errorTitle}>
          {success ? '¡Gracias!' : 'Hubo un Error'}
        </h2>
        <p>{message}</p>
        <button onClick={onClose} className={styles.closeButton}>
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default ConfirmationModal;