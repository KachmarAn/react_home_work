import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {fetchTodos, addTodo} from "../../store/actions/todoActions.js";
import {useTheme} from "../../contexts/ThemeContext.js";
import "./Todo.css";

function TodoList() {
    const dispatch = useDispatch();
    const {todos, loading, error} = useSelector((state) => state.todo);
    const {theme} = useTheme();
    const [newTodo, setNewTodo] = useState('');

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);
    const handleAddTodo = () => {
        if (newTodo.trim()) {
            dispatch(addTodo(newTodo));
            setNewTodo("");
        }
    };
    if (loading) {
        return <div className={`todo-container ${theme}`}>Завантаження...</div>;
    }

    if (error) {
        return <div className={`todo-container ${theme}`}>Помилка: {error}</div>;
    }

    if (loading) return <div className={`todo-container ${theme}`}>Завантаження...</div>;
    if (error) return <div className={`todo-container ${theme}`}>Помилка: {error}</div>;

    return (
        <div className={`todo-container ${theme}`}>
            <h2>Список завдань (JSONPlaceholder)</h2>
            <div className="todo-form">
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Нове завдання"
                />
                <button onClick={handleAddTodo}>Додати</button>
            </div>
            <ul className="todo-list">
                {todos.map((todo) => (
                    <li key={todo.id} className={`todo-item ${theme}`}>
                        {todo.title || todo.text}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;