import {
    ADD_TODO,
    FETCH_TODOS_FAILURE,
    FETCH_TODOS_REQUEST,
    FETCH_TODOS_SUCCESS,
} from "../actions/actionTypes.js";

const initialState = {
    todos: [],
    loading: false,
    error: null,
};

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TODOS_REQUEST:
            return {...state, loading: true, error: null};
        case FETCH_TODOS_SUCCESS:
            return {...state, loading: false, todos: action.payload};
        case FETCH_TODOS_FAILURE:
            return {...state, loading: false, error: action.payload};
        default:
            return state;
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };
    }
};