// src/components/RSVP.jsx
import React, { useState } from 'react';
import ConfirmationModal from './ConfirmationModal';
import styles from './RSVP.module.css';

const RSVP = () => {
  const [asistencia, setAsistencia] = useState('');
  const [otroInput, setOtroInput] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ success: true, message: '' });
  const [formStatus, setFormStatus] = useState('idle');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormStatus('submitting');

    const form = event.target;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data
      });

      if (response.ok) {
        setModalContent({ success: true, message: 'Tu confirmación ha sido enviada con éxito. ¡Muchas gracias!' });
        setFormStatus('success');
        form.reset();
        setAsistencia('');
      } else {
        throw new Error('Error en el envío a Google Sheets');
      }
    } catch (error) {
      setModalContent({ success: false, message: 'No pudimos enviar tu confirmación. Por favor, inténtalo de nuevo más tarde.' });
      setFormStatus('error');
    } finally {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <ConfirmationModal 
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setFormStatus('idle');
        }}
        success={modalContent.success}
        message={modalContent.message}
      />
    <div className={styles.rsvpSection}>
      <div className="container">
        <h2 className={styles.titulo}>Confirma tu Asistencia</h2>
        <p className={styles.subtitulo}>
          Por favor, responde antes del 25 de Septiembre, 2025. ¡Tu presencia es nuestro mejor regalo!
        </p>

        <form 
          onSubmit={handleSubmit}
          action="https://script.google.com/macros/s/AKfycbxAPJARH2p-NyXcBWmQR5cY1R64xUVyJ35mr0wHxp6AkaEg_PvtvTblAzH0tON4BEbJ/exec" 
          method="POST" 
          className={styles.form}
        >
          <div className={styles.formGroup}>
            <label className={styles.label}>¿Asistirás a nuestro matrimonio?</label>
            <div className={styles.radioGroup}>
              <label>
                <input 
                  type="radio" 
                  name="asistencia" 
                  value="Si" 
                  required 
                  onChange={(e) => setAsistencia(e.target.value)}
                /> Sí, ¡no me lo pierdo!
              </label>
              <label>
                <input 
                  type="radio" 
                  name="asistencia" 
                  value="No" 
                  required 
                  onChange={(e) => setAsistencia(e.target.value)}
                /> No, me encantaría, pero no podré.
              </label>
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="nombre" className={styles.label}>Nombre completo:</label>
            <input 
              type="text" 
              id="nombre" 
              name="nombreCompleto" 
              placeholder="Escribe tu nombre y apellido" 
              required 
              className={styles.input}
            />
          </div>

          {asistencia === 'Si' && (
            <div className={styles.conditionalSection}>
              <div className={styles.formGroup}>
                <label className={styles.label}>¿Vendrás con acompañante? (solo si tu invitación lo indica)</label>
                <div className={styles.radioGroup}>
                  <label><input type="radio" name="acompanante" value="Si"/> Sí</label>
                  <label><input type="radio" name="acompanante" value="No" defaultChecked/> No</label>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>¿Tienes alguna restricción alimentaria?</label>
                <div className={styles.checkboxGroup}>
                  <label><input type="checkbox" name="restriccion" value="Ninguna"/> No</label>
                  <label><input type="checkbox" name="restriccion" value="Vegetariano"/> Vegetariano(a)</label>
                  <label><input type="checkbox" name="restriccion" value="Vegano"/> Vegano(a)</label>
                  <label><input type="checkbox" name="restriccion" value="SinGluten"/> Sin gluten</label>
                  <div className={styles.otroGroup}>
                    <label>
                      <input 
                        type="checkbox" 
                        name="restriccion" 
                        value="Otro" 
                        onChange={(e) => { if (!e.target.checked) setOtroInput(''); }}
                      /> Otro:
                    </label>
                    <input 
                      type="text"
                      name="restriccion_otro_detalle"
                      className={styles.otroInput}
                      value={otroInput}
                      onChange={(e) => setOtroInput(e.target.value)}
                      placeholder="Especifica aquí"
                    />
                  </div>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Para la organización de la mesa, ¿eres zurdo(a)?</label>
                <div className={styles.radioGroup}>
                  <label><input type="radio" name="zurdo" value="Si"/> Sí</label>
                  <label><input type="radio" name="zurdo" value="No" defaultChecked/> No</label>
                </div>
              </div>
            </div>
          )}
          
          <button 
              type="submit" 
              className={styles.submitButton}
              disabled={formStatus === 'submitting'}
            >
              {formStatus === 'submitting' ? 'Enviando...' : 'Enviar Confirmación'}
            </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default RSVP;