import React from 'react';

import './style.scss';

function Title(props) {
    return (
        <div>
            <h2>{ props.content }</h2>
        </div>
    );
}

export default Title;