
import React from 'react'
import './App.css';
import Translator from './Components/Translator';
import WordListsMain from './Components/WordListsMain';
import BasicWordList from './Components/Wordlists/BasicWordList';
// import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'



function App() {

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h2>MotherRussia.com</h2>
          <nav>
            <Link to="/"><h2>Home</h2></Link>
            <Link to="/Wordlists"><h2>WordLists</h2></Link>
            <Link><h2>Grammar</h2></Link>
            <Link><h2>Pronunciation</h2></Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Translator />}/>
          <Route path="/Wordlists" element={<WordListsMain />}/>
        </Routes>
            
      </div>
    </Router>
  );
}

export default App;
