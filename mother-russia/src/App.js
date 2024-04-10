
import React from 'react'
import './App.css';
import Translator from './Components/Translator';
// import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

// import WordLists from './Components/WordLists'

function App() {

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h2>MotherRussia.com</h2>
          <nav>
            <Link to="/"><h2>Home</h2></Link>
            <Link><h2>WordLists</h2></Link>
            <Link><h2>Grammar</h2></Link>
            <Link><h2>Pronunciation</h2></Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Translator />}/>
        </Routes>
            
      </div>
    </Router>
  );
}

export default App;
