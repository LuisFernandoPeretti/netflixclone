import React from "react";
import './Header.css'

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://i.imgur.com/StZusHA.png" alt="Netflix"/>
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://i.imgur.com/NO1VPjr.jpg" alt="Usuário"></img>
                </a>
            </div>
        </header>
    );
}