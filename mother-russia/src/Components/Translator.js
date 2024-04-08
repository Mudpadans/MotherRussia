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

    setTimeout(() => {
      setIsLoading(false);
    }, 2000); 

    try {
      const response = await axios.post('http:/localhost:1800/translate', {
        userPrompt: inputText
      });

      console.log(response)

      let translatedText = response.data.translation
      setTranslation(translatedText);

      await axios.post('http:/localhost:1800/text-to-speech', {
        text: translatedText
      })

      if (audioRef.current) {
        let newSrc = `http://localhost:1800/audio?cb=${Date.now()}`;
        audioRef.current.src = newSrc;
        console.log(audioRef)
        audioRef.current.load()
      }
    } catch (error) {
      setError('Failed to fetch error.')
      console.error('Fetch error:', error)
    } finally {
      console.log("loading")
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
              <button onClick={() => { setInputText(''); setTranslation(''); }} disabled={isLoading}>
                    Clear
                  </button>
              {error && <p>{error}</p>}
            </div>
      </section>
    </div>
  )
}

export default Translator;
  