import React from "react";
import {useTheme} from "../contexts/ThemeContext";
import {useSelector} from "react-redux";
import {useLocation} from "react-router-dom";

function Footer() {
    const {theme} = useTheme();
    const location = useLocation();
    const todos = useSelector((state) => {
        if (!state || !state.todo) {
            return [];
        }
        return Array.isArray(state.todo.todos) ? state.todo.todos : [];
    });
    const isTodoPage = location.pathname === "/todo-redux";

    return (
        <footer className={`footer ${theme}`}>
            {isTodoPage ? (
                <p>Загальна кількість TODO елементів: {todos.length}</p>
            ) : (
                <p>&copy; 2025 Всі права захищено</p>
            )}
        </footer>
    );
}

export default Footer;