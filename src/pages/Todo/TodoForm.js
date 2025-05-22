import React, {useState} from 'react';
import {useTheme} from '../../contexts/ThemeContext';

const TodoForm = ({onAdd}) => {
    const {theme} = useTheme();
    const [newTodoTitle, setNewTodoTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newTodoTitle.trim()) {
            alert('Будь ласка, введіть назву завдання.');
            return;
        }
        if (newTodoTitle.length > 100) {
            alert('Назва завдання має містити не більше 100 символів.');
            return;
        }
        onAdd(newTodoTitle);
        setNewTodoTitle('');
    };

    return (
        <form onSubmit={handleSubmit} className={`todo-form ${theme}`}>
            <input
                type="text"
                placeholder="Додати нове завдання..."
                value={newTodoTitle}
                onChange={(e) => setNewTodoTitle(e.target.value)}
                className={`new-todo-input ${theme}`}
            />
            <button type="submit" className={`add-todo-button ${theme}`}>Додати</button>
        </form>
    );
};

export default TodoForm;