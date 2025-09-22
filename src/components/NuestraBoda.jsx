import React, { useState, useEffect } from 'react';
import styles from './NuestraBoda.module.css';
import florDecorativa from '../assets/flor.png';

const NuestraBoda = () => {
  const fechaDeLaBoda = new Date('February 21, 2026 17:00:00');

  const calcularTiempoRestante = () => {
    const diferencia = +fechaDeLaBoda - +new Date();
    let tiempoRestante = {};

    if (diferencia > 0) {
      tiempoRestante = {
        dias: Math.floor(diferencia / (1000 * 60 * 60 * 24)),
        horas: Math.floor((diferencia / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((diferencia / 1000 / 60) % 60),
        segundos: Math.floor((diferencia / 1000) % 60),
      };
    }
    return tiempoRestante;
  };

  const [tiempoRestante, setTiempoRestante] = useState(calcularTiempoRestante());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTiempoRestante(calcularTiempoRestante());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const diaBoda = fechaDeLaBoda.toLocaleDateString('es-ES', { day: 'numeric' });
  const mesBoda = fechaDeLaBoda.toLocaleDateString('es-ES', { month: 'long' });
  const anioBoda = fechaDeLaBoda.toLocaleDateString('es-ES', { year: 'numeric' });
  const mesFormateado = mesBoda.charAt(0).toUpperCase() + mesBoda.slice(1);

  return (
    <div className={`container ${styles.bodaContainer}`}>
      <div className={styles.tarjeta}>
        <h2 className={styles.mensaje}>La vuelta más importante de nuestras vidas será:</h2>
        <h2 className={styles.fecha}>
          {diaBoda} de {mesFormateado}, {anioBoda}
        </h2>
        
        {Object.keys(tiempoRestante).length > 0 ? (
          <>
            <p className={styles.tituloContador}>Faltan...</p>
            <div className={styles.contador}>
              <div className={styles.bloqueTiempo}>
                <span>{tiempoRestante.dias}</span>
                <p>Días</p>
              </div>
              <div className={styles.bloqueTiempo}>
                <span>{tiempoRestante.horas}</span>
                <p>Hras</p>
              </div>
              <div className={styles.bloqueTiempo}>
                <span>{tiempoRestante.minutos}</span>
                <p>Mins</p>
              </div>
              <div className={styles.bloqueTiempo}>
                <span>{tiempoRestante.segundos}</span>
                <p>Segs</p>
              </div>
            </div>
          </>
        ) : (
          <p className={styles.granDia}>¡Llegó el gran día!</p>
        )}
      </div>
    </div>
  );
};

export default NuestraBoda;