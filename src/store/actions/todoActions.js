import {
    ADD_TODO,
    FETCH_TODOS_FAILURE,
    FETCH_TODOS_REQUEST,
    FETCH_TODOS_SUCCESS,
} from "./actionTypes.js";

export const addTodo = (text) => ({
    type: ADD_TODO,
    payload: {
        id: Date.now(),
        text: text.trim(),
        createdAt: new Date().toISOString(),
    },
});

export const fetchTodosFailure = (error) => ({
    type: FETCH_TODOS_FAILURE,
    payload: error,
});

export const fetchTodosRequest = () => ({
    type: FETCH_TODOS_REQUEST,
});

export const fetchTodosSuccess = (todos) => ({
    type: FETCH_TODOS_SUCCESS,
    payload: todos,
});

export const fetchTodos = () => {
    return async (dispatch) => {
        dispatch({type: 'FETCH_TODOS_REQUEST'});
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
            const data = await response.json();
            dispatch({type: 'FETCH_TODOS_SUCCESS', payload: data});
        } catch (error) {
            dispatch({type: 'FETCH_TODOS_FAILURE', payload: error.message});
        }
    };
};
