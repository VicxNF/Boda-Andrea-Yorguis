import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import Header from './components/Header';
import NuestraBoda from './components/NuestraBoda';
import Galeria from './components/Galeria';
import Itinerario from './components/Itinerario';
import PreguntasFrecuentes from './components/PreguntasFrecuentes';
import RSVP from './components/RSVP';

function App() {
  return (
    <div>
      <Header />
      <NuestraBoda />
      <Galeria />
      <Itinerario />
      <PreguntasFrecuentes />
      {/* Añade aquí los otros componentes en el orden que desees */}
      <RSVP />
    </div>
  );
}

export default App;