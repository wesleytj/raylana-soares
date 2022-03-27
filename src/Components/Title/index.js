import React from 'react';

import './style.scss';

function Title(props) {
    return (
        <div className='container-title'>
            <h2>{ props.content }</h2>
        </div>
    );
}

export default Title;