import React from "react";
import './Header.css'

function Header () {

    return (
        <header>
            <div className="header--logo">
                <a href="/">
                    <img src="https://www.caviarcriativo.com/wp-content/uploads/2022/03/simbolo-Marca-Netflix.jpg" alt="Netflix"/>
                </a>
            </div>
            <div className="header--user">
                <a>user</a>
            </div>
        </header>
    );
}

export default Header;