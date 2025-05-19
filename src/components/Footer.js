import React from 'react';
import {useTheme} from '../contexts/ThemeContext';

function Footer() {
    const {theme} = useTheme();

    return (
        <footer className={`footer ${theme}`}>
            <p>&copy; 2025 Всі права захищено</p>
        </footer>
    );
}

export default Footer;