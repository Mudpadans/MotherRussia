import logo from './logo.svg';
import React, {useState} from 'react'
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [translation, setTranslation] = useState('');

  const handleTranslate = async () => {
    try {
      const response = await fetch('/translate', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: inputText })
      });
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const data = await response.json();
      setTranslation(data.translation);
    } catch (error) {
      console.error('Fetch error:', error)
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>MotherRussia.com</h2>
        <h2>Word Lists</h2>
        <h2>Grammar</h2>
        <h2>Pronunciation</h2>
      </header>
      <section id="translator-background">
        <div id="translator">
          <textarea placeholder="translate into Russian or English"></textarea>
          <button id="translator-btn">Translate</button>
        </div>
      </section>

    </div>
  );
}

export default App;
