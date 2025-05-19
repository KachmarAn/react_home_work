import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import {useTheme} from '../contexts/ThemeContext';

function Header() {
    const {theme} = useTheme();

    return (
        <header className={`header ${theme}`}>
            <h1>Голосування за смайлик!!!</h1>
            <ThemeSwitcher/>
        </header>
    );
}

export default Header;