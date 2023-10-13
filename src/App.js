import React from 'react';
import './App.css';
import {Home} from "./pages/Home";
import SeConnecter from "./pages/SeConnecter";
import Accueil from './pages/Accueil';
import Importer from './pages/Importer';
import Lecture from './pages/Lecture';

const App = () => {
  return (
    <div className='h-screen w-screen'>
      {/* <Home/> */}
      {/* <SeConnecter/> */}
      {/* <Accueil/> */}
      {/* <Importer/> */}
      <Lecture/>
    </div>
  );
}

export default App;
