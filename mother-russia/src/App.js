
import React, { useState, useRef, useEffect } from 'react'
import './App.css';
import Translator from './Components/Translator';
import BasicWordList from './Components/Wordlists/BasicWordList';
import IntermediateWordList from './Components/Wordlists/IntermediateWordList';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropDownRef = useRef(null)

  const toggleDropdown = () => setShowDropdown(!showDropdown)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        setShowDropdown(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [dropDownRef])

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h2>MotherRussia.com</h2>
          <nav>
            <Link to="/"><h2>Home</h2></Link>
            <div class='dropdown' ref={dropDownRef}>
              <Link onClick={toggleDropdown}>
                <h2>Word Lists</h2>
              </Link>
              {showDropdown && (
                <div className='dropdown-content'>
                  <Link to="/Wordlists/Basic">Basic Word List</Link>
                  <Link to="/Wordlists/Intermediate">Intermediate Word List</Link>
                </div>
              )}
            </div>
            <Link><h2>Grammar</h2></Link>
            <Link><h2>Pronunciation</h2></Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Translator />}/>
          <Route path="/Wordlists/Basic" element={<BasicWordList />}/>
          <Route path="/Wordlists/Intermediate" element={<IntermediateWordList />}/>
        </Routes>
            
      </div>
    </Router>
  );
}

export default App;
