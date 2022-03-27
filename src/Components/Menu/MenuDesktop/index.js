import React, { useState } from 'react';
import { Link } from "react-router-dom";

/*########*//*-----===== ICONES =====----- */
/*########*/import { FaHome } from "react-icons/fa";
/*########*/import { BiInfoCircle } from "react-icons/bi";
/*########*/import { GiFingernail } from "react-icons/gi";
/*########*/import { MdContactMail, MdLocationOn } from "react-icons/md";

import './style.scss';

function Menu() {
    const itemMenu = useState(
        [
            <Link to='/'><FaHome /></Link>,
            <Link to='/About'><BiInfoCircle /></Link>,
            <Link to='/Services'><GiFingernail /></Link>,
            <Link to='/Contact'><MdContactMail /></Link>,
            <Link to='/Location'><MdLocationOn /></Link>
        ]
    );

  return (
    <div className='container-menu'>
        { itemMenu }
    </div>
    );
}

export default Menu;