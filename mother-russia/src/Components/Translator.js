import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import './Translator.css';

function Translator() {
  const [inputText, setInputText] = useState('');  
  const [translation, setTranslation] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isAudioLoading, setIsAudioLoading] = useState(false);
  const [error, setError] = useState('');
  const audioRef = useRef(null)

  useEffect(() => {
    if (!isAudioLoading && translation) {
      handleAudio();
    }
  }, [isAudioLoading, translation])
 
  const handleTranslate = async () => {
    setIsLoading(true);
    setError('');
    setIsAudioLoading(true)

    try {
      const response = await axios.post('/translate', {
        userPrompt: inputText
      });

      let translatedText = response.data.translation
      setTranslation(translatedText);

      
      const ttsResponse = await axios.post('/text-to-speech', {
        text: translatedText
      });
      console.log(ttsResponse)

      setIsAudioLoading(false)
         
    } catch (error) {
      setError('Failed to fetch error.')
      console.error('Fetch error:', error)
      setIsAudioLoading(false)
    } finally {
      console.log("loading")
      setIsLoading(false)
    }
  };  

  const handleAudio = () => {
    if (audioRef.current) {
      let newSrc = `/dynamic-audio?cb=${Date.now()}`;
      audioRef.current.src = newSrc;
      audioRef.current.load()
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
            {isLoading && <p>Translating...</p>} 
          </div>
      </section>
      <section>
          <div id="translation">
              <p>(AI) Translation:</p>
              <p>{translation}</p>
              {translation && (
                <>
                  {isAudioLoading ? (
                    <p>Audio is loading...</p>
                  ) : (
                    <audio ref={audioRef} disabled={!translation} controls/>
                  )}
                </>
              )}
              {error && <p>{error}</p>}
            </div>
      </section>
    </div>
  )
}

export default Translator;
  