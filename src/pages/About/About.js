import React from 'react';
import {useTheme} from '../../contexts/ThemeContext';

function About() {
    const {theme} = useTheme();
    return (
        <div className={`page-content ${theme}`}>
            <h2>Про Мене</h2>
            <p>Привіт! Я розробник цього SPA додатку. Моєю метою було створити просте, але функціональне
                веб-застосування, яке демонструє використання React Context API та React Router для навігації.</p>
            <p>Цей додаток дозволяє користувачам голосувати за улюблені смайлики та перемикати тему інтерфейсу між
                світлою та темною.</p>
        </div>
    );
}

export default About;