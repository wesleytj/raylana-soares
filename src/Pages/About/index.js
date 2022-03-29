import React from 'react';

import './style.scss';

function About() {
  return (
    <div className='container container-about'>
      <div className='about-wrapper profile-wrapper'>
        <div className='profile'></div>
        <div className='profile-txt'>
          <p>Raylana Soares</p>
          <div>
            <p>@raylananaildesign</p>
            <p>(51) 9 9647-1743</p>
            <p>Rua Demétrio Ribeiro, 240 <br />
            93110-240 São Leopoldo - RS</p>
          </div>
        </div>
      </div>
      <div className='about-wrapper description-wrapper'>
        <p>Oi, eu sou a Ray ;) !</p>
        <div>
          <p>Formações:</p>
          {/* 
           //Aqui vai a foto dos certificados
          <div></div>
          <div></div> */}
          <p>Alongamento acrílico para iniciante - <span>Renata Queiroz</span></p>
          <p>Aperfeiçoamento de acrílico no molde - <span>Verônica Buzellato</span></p>
        </div>

      </div>
    </div>
  );
}

export default About;