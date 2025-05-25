import React from 'react';
import {Link} from 'react-router-dom';
import ThemeSwitcher from './ThemeSwitcher';
import {useTheme} from '../contexts/ThemeContext';

function Header() {
    const {theme} = useTheme();

    return (
        <header className={`header ${theme}`}>
            <h1>Мій SPA додаток</h1>
            <nav>
                <ul className="main-nav">
                    <li><Link to="/" className={`${theme}`}>Головна</Link></li>
                    <li><Link to="/contacts" className={`${theme}`}>Контакти</Link></li>
                    <li><Link to="/about" className={`${theme}`}>Про мене</Link></li>
                    <li><Link to="/todo" className={`${theme}`}>Todo</Link></li>
                    <li><Link to="/counter" className={`${theme}`}>Counter</Link></li>
                </ul>
            </nav>
            <ThemeSwitcher/>
        </header>
    );
}

export default Header;