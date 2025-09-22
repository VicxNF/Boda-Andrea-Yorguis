import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1>Andrea & Yorguis</h1>
        <p>Nuestro Matrimonio</p>
      </div>
    </header>
  );
};

export default Header;