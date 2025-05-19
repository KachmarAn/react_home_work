import React from 'react';
import {useTheme} from '../contexts/ThemeContext';

function ThemeSwitcher() {
    const {theme, toggleTheme} = useTheme();

    return (
        <button className={`theme-switcher ${theme}`} onClick={toggleTheme}>
            {theme === 'light' ? 'Темна тема' : 'Світла тема'}
        </button>
    );
}

export default ThemeSwitcher;