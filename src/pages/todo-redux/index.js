import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {addTodo} from "../../store/actions/todoActions.js";

const TodoRedux = () => {
    const [inputValue, setInputValue] = useState("");
    const todos = useSelector((state) => state.todo.todos);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            dispatch(addTodo(inputValue));
            setInputValue("");
        }
    };
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '20px',
            backgroundColor: '#7dd3fc',
            minHeight: '500px',
            borderRadius: '8px'
        }}>
            <h1 style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                marginBottom: '20px',
                color: '#1f2937'
            }}>
                TODO
            </h1>

            <form onSubmit={handleSubmit} style={{ marginBottom: '30px' }}>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        placeholder="Введіть нове завдання..."
                        style={{
                            flex: 1,
                            padding: '12px',
                            border: '2px solid #e5e7eb',
                            borderRadius: '6px',
                            fontSize: '16px',
                            outline: 'none'
                        }}
                    />
                    <button
                        type="submit"
                        style={{
                            padding: '12px 20px',
                            backgroundColor: '#f3f4f6',
                            border: '2px solid #d1d5db',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            fontSize: '16px',
                            fontWeight: '500'
                        }}
                    >
                        Додати
                    </button>
                </div>
            </form>

            <h2 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                marginBottom: '20px',
                color: '#1f2937'
            }}>
                TODOS
            </h2>

            <div style={{ marginBottom: '20px' }}>
                {todos.map((todo) => (
                    <div
                        key={todo.id}
                        style={{
                            padding: '15px',
                            marginBottom: '10px',
                            backgroundColor: '#f9fafb',
                            border: '2px solid #e5e7eb',
                            borderRadius: '6px',
                            fontSize: '16px'
                        }}
                    >
                        {todo.text}
                    </div>
                ))}
            </div>

            <div style={{
                fontSize: '16px',
                fontWeight: '500',
                color: '#1f2937'
            }}>
                Всього: {todos.length}
            </div>
        </div>
    );
};

export default TodoRedux;