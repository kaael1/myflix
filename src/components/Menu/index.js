import React from 'react';
import logo from '../../assets/img/logo.png';
import './menu.css';
import Button from '../Button';

// import ButtonLink from './componentes/ButtonLink';

function Menu(){
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={logo} alt="myflix logo"/>
            </a>
            <Button as="a" className="ButtonLink">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;