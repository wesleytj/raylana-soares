/*----------========== IMPORTAÇÕES ==========---------- */
/*########*//*-----===== REACT =====----- */
/*########*/import React from 'react';
/*########*/import { Routes, Route } from 'react-router-dom';

/*########*//*-----===== COMPONENTES =====----- */
/*########*/import Aside from './Components/Aside';

/*########*//*-----===== PAGINAS =====----- */
/*########*/import Home from './Pages/Home';
/*########*/import About from './Pages/About';

import './App.scss';

function App() {
  return (
    <div className="App">
      <header></header>
      <div className='aside'>
        <Aside />
      </div>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
