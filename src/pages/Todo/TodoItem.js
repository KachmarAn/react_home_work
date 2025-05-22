import React, {useState} from 'react';
import {useTheme} from '../../contexts/ThemeContext';

const TodoItem = ({todo, onToggle, onEdit, onDelete}) => {
    const {theme} = useTheme();
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(todo.title);

    const handleSaveEdit = async () => {
        if (!editedTitle.trim()) {
            alert('Назва завдання не може бути порожньою.');
            return;
        }
        if (editedTitle.length > 100) {
            alert('Назва завдання має містити не більше 100 символів.');
            return;
        }
        await onEdit(todo.id, editedTitle);
        setIsEditing(false);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSaveEdit();
        }
        if (e.key === 'Escape') {
            setEditedTitle(todo.title);
            setIsEditing(false);
        }
    };

    const handleCancelEdit = () => {
        setEditedTitle(todo.title);
        setIsEditing(false);
    };

    return (<li className={`todo-item ${theme}`}>
        {isEditing ? (<>
            <input
                type="text"
                className={`edit-input ${theme}`}
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button onClick={handleSaveEdit} className={`save-button ${theme}`}>💾</button>
            <button onClick={handleCancelEdit} className={`cancel-button ${theme}`}>✖️</button>
        </>) : (<>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id, !todo.completed)}
                className={`todo-checkbox ${theme}`}
            />
            <span
                className={`todo-title ${theme}`}
                style={{textDecoration: todo.completed ? 'line-through' : 'none'}}
                onDoubleClick={() => setIsEditing(true)}
            >
                        {todo.title}
                    </span>
            <button onClick={() => setIsEditing(true)} className={`edit-button ${theme}`}>✏️</button>
            <button onClick={() => onDelete(todo.id)} className={`delete-button ${theme}`}>❌</button>
        </>)}
    </li>);
};

export default TodoItem;