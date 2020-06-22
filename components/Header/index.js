import React from 'react';
import { Link } from 'react-router-dom';

import "./styles.css";

import Logo from "../../assets/imgs/logo.png";


const Header = () => (
    <header className="header">
        <Link className="header__link" to="/">
            <img className="header__logo" src={Logo} alt="Zé" />
        </Link>
    </header>
)

export default Header;