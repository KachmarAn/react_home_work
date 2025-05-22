import React from 'react';
import {useTheme} from '../../contexts/ThemeContext';

function Contacts() {
    const {theme} = useTheme();
    return (
        <div className={`page-content ${theme}`}>
            <h2>Наші Контакти</h2>
            <p>Ви можете зв'язатися з нами за наступною інформацією:</p>
            <ul>
                <li>Email: contact@example.com</li>
                <li>Телефон: +380 (12) 345-6789</li>
                <li>Адреса: вул. Київська, 1, Київ, Україна</li>
            </ul>
        </div>
    );
}

export default Contacts;