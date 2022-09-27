import React from "react";
import './Header.css'

function Header ({black}) {

    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://www.caviarcriativo.com/wp-content/uploads/2022/03/simbolo-Marca-Netflix.jpg" alt="Netflix"/>
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117" alt="usuário "/>
                </a>
            </div>
        </header>
    );
}

export default Header;