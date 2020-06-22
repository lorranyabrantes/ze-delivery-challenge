import React from 'react';
import { Link } from 'react-router-dom';

import Logo from "../../assets/imgs/logo.png";

import "./styles.css";


const Header = () => (
    <header className="header">
        <Link className="header__link" to="/">
            <img className="header__logo" src={Logo} alt="Zé" />
        </Link>
    </header>
)

export default Header;