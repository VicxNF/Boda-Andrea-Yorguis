import React, { useState } from 'react';
import styles from './PreguntasFrecuentes.module.css';

const faqs = [
  {
    pregunta: "¿El lugar cuenta con buena señal?",
    respuesta: "Sí, el lugar cuenta solo con señal 3G. Por tanto, toma las previsiones si requieres transporte de regreso por aplicaciones (UBER, DIDI, CABIFY)."
  },
  {
    pregunta: "¿Se puede fumar en el lugar?",
    respuesta: "Sí, el lugar cuenta con una zona de fumadores designada."
  },
  {
    pregunta: "¿Tiene guardarropía el lugar?",
    respuesta: "Sí, contamos con servicio de guardarropía para tu comodidad."
  },
  {
    pregunta: "¿Puedo llevar zapatos más cómodos para bailar toda la noche?",
    respuesta: "¡Por supuesto! La idea es disfrutar y estar lo más cómodo posible para no parar de bailar."
  },
  {
    pregunta: "¿Habrá estacionamiento disponible?",
    respuesta: "Sí, habrá estacionamiento gratuito en el lugar del evento."
  },
  {
    pregunta: "¿Puedo llevar acompañante?",
    respuesta: "Si tu invitación incluye “y acompañante” o “+1”, ¡claro que sí! De lo contrario, agradecemos respetar la invitación personal."
  },
  {
    pregunta: "¿Qué pasa si no puedo asistir?",
    respuesta: "Te extrañaremos mucho, pero te pedimos que nos lo avises lo antes posible a través del formulario de confirmación para poder organizar mejor los espacios."
  },
  {
    pregunta: "¿El lugar tiene acceso para personas con movilidad reducida?",
    respuesta: "Sí, el acceso está totalmente adaptado y contaremos con personal para asistir en lo que sea necesario."
  },
  {
    pregunta: "¿Habrá opciones de comida especiales?",
    respuesta: "Sí, tendremos opciones para vegetarianos y otras restricciones alimentarias. Por favor, avísanos en tu confirmación para tenerlo todo preparado para ti."
  },
  {
    pregunta: "¿Dónde me siento?",
    respuesta: "Habrá un seating plan para organizar las mesas. No, no puedes elegir… pero prometemos que estarás con buena compañía (o con alguien que al menos baile bien)."
  }
];

const PreguntasFrecuentes = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.faqContainer}>
      <div className="container">
        <h2 className={styles.titulo}>Preguntas Frecuentes</h2>
        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <button className={styles.pregunta} onClick={() => handleToggle(index)}>
                {faq.pregunta}
                <span className={`${styles.icon} ${openIndex === index ? styles.open : ''}`}>+</span>
              </button>
              <div className={`${styles.respuesta} ${openIndex === index ? styles.respuestaAbierta : ''}`}>
                <p>{faq.respuesta}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PreguntasFrecuentes;