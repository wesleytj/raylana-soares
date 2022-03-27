/*----------========== IMPORTAÇÕES ==========---------- */
/*########*//*-----===== REACT =====----- */
/*########*/import React from 'react';

/*########*//*-----===== COMPONENTES =====----- */
/*########*/import Aside from './Components/Aside';

/*########*//*-----===== PAGINAS =====----- */
/*########*/import Home from './Pages/Home';

import './App.scss';

function App() {
  return (
    <div className="App">
      <header></header>
      <div className='aside'>
        <Aside />
      </div>
      <main>
        <Home />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
