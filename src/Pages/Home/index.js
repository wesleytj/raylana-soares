import React from 'react';
import Typing from 'react-typing-animation';

import './style.scss';

function Home() {
  return (
      <div className='container'>
          <Typing speed={150} cursor={false}>
              <h1>Designer <br/> de Unhas</h1>
          </Typing>
      </div>
  );
}

export default Home;