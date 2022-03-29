/*----------========== IMPORTAÇÕES ==========---------- */
/*########*//*-----===== REACT =====----- */
/*########*/import React from 'react';
/*########*/import { Routes, Route } from 'react-router-dom';

/*########*//*-----===== COMPONENTES =====----- */
/*########*/import Title from './Components/Title';
import MenuDesktop from './Components/Menu/MenuDesktop';
import MenuMobile from './Components/Menu/MenuMobile';

/*########*//*-----===== PAGINAS =====----- */
/*########*/import Home from './Pages/Home';
/*########*/import About from './Pages/About';
/*########*/import Services from './Pages/Services';
/*########*/import Contact from './Pages/Contact';
/*########*/import Location from './Pages/Location';


import './App.scss';
import './Responsive.scss';

function App() {

  return (
    <div className="App">
      <header>
        <Title content="Raylana Soares"/>
        <MenuMobile />
      </header>
      <div className='aside'>
        <MenuDesktop />
      </div>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Location" element={<Location />} />
        </Routes>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
