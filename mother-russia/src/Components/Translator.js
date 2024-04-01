import React, { useState, useRef } from 'react';
import axios from 'axios';
import './Translator.css';

function Translator() {
  const [inputText, setInputText] = useState(''); 
  const [translation, setTranslation] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const audioRef = useRef(null)
 
  const handleTranslate = async () => {
    setIsLoading(true);
    setError('');

    try {
      const response = await axios.post('/translate', {
        userPrompt: inputText
      });

      console.log(response)

      let translatedText = response.data.translation
      setTranslation(translatedText);

      await axios.post('/text-to-speech', {
        text: translatedText
      })

      if (audioRef.current) {
        let newSrc = `/audio?cb=${Date.now()}`;
        audioRef.current.src = newSrc;
        console.log(audioRef)
        audioRef.current.load()
      }
    } catch (error) {
      setError('Failed to fetch error.')
      console.error('Fetch error:', error)
    } finally {
      setIsLoading(false)
    }
  };  
  
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
              {translation && (
                <>
                  <audio ref={audioRef} src="/audio" controls/>
                </>
              )}
              {error && <p>{error}</p>}
            </div>
      </section>
    </div>
  )
}

export default Translator;
  