import React from 'react';

import Logo from "../../assets/imgs/logo.png";

import "./styles.css";
//import Home from './screens/Home';

const Header = () => (
    <header className="header">
        <a className="header__link" href="/" title="Home">
            <img className="header__logo" src={Logo} alt="Zé" />
        </a>
    </header>
)

export default Header;