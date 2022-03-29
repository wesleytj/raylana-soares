import React from 'react';

import './style.scss';

function Forms() {
    return (
        <div className='container-forms'>
            <form method='post'>
                <div>
                    <label>Nome:</label>
                    <input name="name" type="text" placeholder="Digite seu nome..." required />
                </div>

                <div>
                    <label>E-mail:</label>
                    <input name="email" type="email" placeholder="Digite seu e-mail..." required />
                </div>

                <div>
                    <label>Telefone:</label>
                    <input name="cellphone" type="text" placeholder="Digite seu telefone com DDD..." />
                </div>

                <div>
                    <label>Mensagem:</label>
                    <textarea name="message" placeholder="Digite sua mensagem..." required></textarea>
                </div>

                <input type="submit" value="Enviar" />
            </form>
        </div>
    );
}

export default Forms;