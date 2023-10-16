import React from 'react';
import './App.css';
import Home from "./pages/Home";
import SeConnecter from "./pages/SeConnecter";
import Accueil from './pages/Accueil';
import Importer from './pages/Importer';
import Lecture from './pages/Lecture';
import Historique from './pages/Historique';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className='h-screen w-screen'>
        <Router>
          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/SeConnecter" element={<SeConnecter/>} />
            <Route path="/Accueil" element={<Accueil/>} />
            <Route path="/Importer" element={<Importer/>} />
            <Route path="/Lecture" element={<Lecture/>} />
            <Route path="/Historique" element={<Historique/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
