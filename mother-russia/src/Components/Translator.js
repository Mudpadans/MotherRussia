import React, {useState} from 'react'
import './Translator.css'

function Translator() {
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
        throw new Error(`Network error: ${response.status}`)
      }
      const data = await response.json();
      setTranslation(data.translation);
    } catch (error) {
      console.error('Fetch error:', error)
    }
  };  
  
  return (
    <section id="translator-background">
        <div id="translator">
          <textarea 
            name="Translation"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="translate into Russian or English"
          ></textarea>
          <button onClick={handleTranslate} id="translator-btn">Translate</button>
          <div>
            <p>Translation:</p>
            <p>{translation}</p>
          </div>
        </div>
      </section>
  )
}

export default Translator;
  