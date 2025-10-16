import { useState } from 'react'
import reactLogo from '/assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import Header from './components/Header';
import NuestraBoda from './components/NuestraBoda';
import Galeria from './components/Galeria';
import FotosCompartidas from './components/FotosCompartidas';
import Itinerario from './components/Itinerario';
import MesaRegalos from './components/MesaRegalos';
import PreguntasFrecuentes from './components/PreguntasFrecuentes';
import RSVP from './components/RSVP';

function App() {
  return (
    <div>
      <Header />
      <NuestraBoda />
      <Galeria />
      <FotosCompartidas />
      <Itinerario />
      <MesaRegalos />
      <PreguntasFrecuentes />
      <RSVP />
    </div>
  );
}

export default App;