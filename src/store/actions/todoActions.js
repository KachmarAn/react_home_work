import { ADD_TODO } from "./actionTypes.js";
export const addTodo = (text) => ({
    type: ADD_TODO,
    payload: {
        id: Date.now(),
        text: text.trim(),
        createdAt: new Date().toISOString()
    }
});