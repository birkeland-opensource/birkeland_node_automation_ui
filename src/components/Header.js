import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <header class="head">
            <div>
                <img src={require("../assets/logo.png")} alt="" />
            </div>
        </header>
    )
}

export default Header