
import React from 'react'
import './App.css';
import Translator from './Components/Translator';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h2>MotherRussia.com</h2>
        <h2>Word Lists</h2>
        <h2>Grammar</h2>
        <h2>Pronunciation</h2>
      </header>
      <Translator />

    </div>
  );
}

export default App;
