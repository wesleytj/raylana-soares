import React from 'react';

import './style.scss';

function About() {
  return (
    <div className='container'>
      <div className='about-wrapper profile-wrapper'>
        <div className='profile'></div>
        <div className='profile-txt'>
          <p>Raylana Soares</p>
          <div>
            <p>@raylananaildesign</p>
            <p>(51) 9 9647-1743</p>
          </div>
        </div>
      </div>
      <div className='about-wrapper description-wrapper'>
        <p>Oi, eu sou a Ray ;) !</p>
        <div>
          <p>Formação:</p>
          <div></div>
          <div></div>
        </div>

      </div>
    </div>
  );
}

export default About;