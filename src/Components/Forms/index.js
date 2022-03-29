import React from 'react';

import './style.scss';

function Forms() {
    return(
        <div className='container container-forms'>
            <form method='post'>
                <label>Nome:</label>
                <input name="name" type="text" placeholder="Digite seu nome..." required/>
                <label>E-mail:</label>
                <input name="email" type="email" placeholder="Digite seu e-mail..." required/>
                <label>Telefone:</label>
                <input name="cellphone" type="text" placeholder="Digite seu telefone com DDD..."/>
                <label>Mensagem:</label>
                <textarea name="message" placeholder="Digite sua mensagem..." required></textarea>
                <input type="submit" value="Enviar"/>
            </form>
        </div>
    );
}

export default Forms;