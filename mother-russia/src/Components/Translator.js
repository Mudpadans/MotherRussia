import React, {useState} from 'react';
import axios from 'axios';
import './Translator.css';

function Translator() {
  const [inputText, setInputText] = useState(''); 
  const [translation, setTranslation] = useState('');

  const handleTranslate = async () => {
    try {
      const response = await axios.post('http://localhost:1800/translate', {
        userPrompt: inputText
      });
      console.log(response)
      setTranslation(response.data.choices[0].text);
    } catch (error) {
      console.error('Fetch error:', error.response ? error.response.data : error.message)
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
          <div id="translation">
            <p>Translation:</p>
            <p>{translation}</p>
          </div>
        </div>
      </section>
  )
}

export default Translator;
  