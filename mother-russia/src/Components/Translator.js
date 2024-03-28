import React, {useState} from 'react';
import axios from 'axios';
import './Translator.css';

function Translator() {
  const [inputText, setInputText] = useState(''); 
  const [translation, setTranslation] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
 
  const handleTranslate = async () => {
    setIsLoading(true);
    setError('')
    try {
      const response = await axios.post('http://localhost:1800/translate', {
        userPrompt: inputText
      });
      console.log(response)
      setTranslation(response.data.translation);
    } catch (error) {
      setError('Failed to fetch error.')
      console.error('Fetch error:', error)
    } finally {
      setIsLoading(false)
    }
  };  

  const handleAudio = async () => {
    setIsLoading(true);
    setError('')
    try {
      const response = await axios.post('http://localhost:1800/text-to-speech', 
      { text: translation },
      { responseType: 'blob' });
      const audioURL = URL.createObjectURL(response.data)
      const audio = new Audio(audioURL)
      audio.play()
    } catch (error) {
      setError('Failed to fetch error.')
      console.error('Fetch error:', error)
    } finally {
      setIsLoading(false)
    }
  }
  
  return (
    <div>
      <section id="translator-background">
          <div id="translator">
            <textarea 
              name="Translation"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="translate into Russian or English"
              disabled={isLoading}
            ></textarea>
            <button onClick={handleTranslate} id="translator-btn">Translate</button>
            {isLoading ? 'Translating...' : 'Translate'} 
            
          </div>
      </section>
      <section>
          <div id="translation">
              <p>Translation:</p>
              <p>{translation}</p>
              {/* audio */}
              <button onClick={handleAudio} disabled={isLoading}>Play</button>
              {error && <p>{error}</p>}
            </div>
      </section>
    </div>
  )
}

export default Translator;
  