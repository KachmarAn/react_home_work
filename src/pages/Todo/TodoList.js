import React from 'react';
import TodoItem from './TodoItem';
import { useTheme } from '../../contexts/ThemeContext';

const TodoList = ({ todos, onToggle, onEdit, onDelete }) => {
    const { theme } = useTheme();

    if (!todos || todos.length === 0) {
        return <p className={`no-todos ${theme}`}>Немає завдань. Створіть нове!</p>;
    }

    return (
        <ul className={`todo-list ${theme}`}>
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={onToggle}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    );
};

export default TodoList;