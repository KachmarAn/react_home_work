import React, {useState, useEffect, useCallback} from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import {useTheme} from '../../contexts/ThemeContext';
import {getTodos, createTodo, updateTodo, deleteTodoApi} from './api';
import './styles.css';

const TodoPage = () => {
    const {theme} = useTheme();
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchAllTodos = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await getTodos();
            setTodos(data.slice(0, 10));
        } catch (err) {
            console.error('Помилка отримання списків завдань:', err);
            setError('Не вдалося завантажити завдання. Спробуйте ще раз.');
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchAllTodos();
    }, [fetchAllTodos]);

    const handleAddTodo = async (title) => {
        try {
            const newTodo = await createTodo(title);
            setTodos(prevTodos => [{...newTodo, id: Date.now()}, ...prevTodos]);
        } catch (err) {
            console.error('Помилка додавання завдання:', err);
            alert('Не вдалося додати завдання. Спробуйте ще раз.');
        }
    };

    const handleUpdateTodosState = (id, updatedData) => {
        setTodos(prevTodos =>
            prevTodos.map(todo =>
                todo.id === id ? {...todo, ...updatedData} : todo
            )
        );
    };

    const handleToggleTodo = async (id, completed) => {
        const originalCompleted = todos.find(todo => todo.id === id)?.completed;
        handleUpdateTodosState(id, {completed});
        try {
            await updateTodo(id, {completed});
        } catch (err) {
            console.error('Помилка перемикання статусу завдання:', err);
            alert('Не вдалося перемкнути статус завдання. Спробуйте ще раз.');
            handleUpdateTodosState(id, {completed: originalCompleted});
        }
    };

    const handleEditTodo = async (id, newTitle) => {
        const originalTitle = todos.find(todo => todo.id === id)?.title;
        handleUpdateTodosState(id, {title: newTitle});
        try {
            await updateTodo(id, {title: newTitle});
        } catch (err) {
            console.error('Помилка редагування завдання:', err);
            alert('Не вдалося відредагувати завдання. Спробуйте ще раз.');
            handleUpdateTodosState(id, {title: originalTitle});
        }
    };

    const handleDeleteTodo = async (id) => {
        const originalTodos = [...todos];
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
        try {
            await deleteTodoApi(id);
        } catch (err) {
            console.error('Помилка видалення завдання:', err);
            alert('Не вдалося видалити завдання. Спробуйте ще раз.');
            setTodos(originalTodos);
        }
    };

    return (
        <div className={`page-content todo-page ${theme}`}>
            <h2 className={`todo-title-page ${theme}`}>Список Завдань (Todo List)</h2>
            <TodoForm onAdd={handleAddTodo}/>
            {loading && <p className={`loading-message ${theme}`}>Завантаження завдань...</p>}
            {error && <p className={`error-message ${theme}`}>{error}</p>}
            {!loading && !error && (
                <TodoList
                    todos={todos}
                    onToggle={handleToggleTodo}
                    onEdit={handleEditTodo}
                    onDelete={handleDeleteTodo}
                />
            )}
        </div>
    );
};

export default TodoPage;