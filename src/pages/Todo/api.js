const API_URL = 'https://jsonplaceholder.typicode.com/todos';

export const getTodos = async () => {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error('Не вдалося отримати список справ');
    return await res.json();
};

export const createTodo = async (title) => {
    const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, completed: false })
    });
    if (!res.ok) throw new Error('Не вдалося створити завдання');
    return await res.json();
};

export const updateTodo = async (id, data) => {
    const res = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error('Не вдалося оновити список справ');
    return await res.json();
};

export const deleteTodoApi = async (id) => {
    const res = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
    });
    if (!res.ok) throw new Error('Не вдалося видалити завдання');
};