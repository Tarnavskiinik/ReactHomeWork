import React, { useState } from 'react';
function TodoList() {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Сходить за Хлебом', done: false },
        { id: 2, text: 'Сходить на тренинг', done: false  },
        { id: 3, text: 'Отвести сына на тренировку', done: false },
    ]);
    const [inputValue, setInputValue] = useState('');

    const todoClick = (id) => {
        const updatedTodos = todos.map(todo =>
            todo.id === id ? { ...todo, done: !todo.done } : todo
        );
        setTodos(updatedTodos);
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const formSubmit = (e) => {
        e.preventDefault();
        const newTodo = {
            id: Date.now(),
            text: inputValue,
            done: false,
        };
        setTodos([...todos, newTodo]);
        setInputValue('');
    };

    return (
        <div>
            <ul>
                {todos.map(todo => (
                    <li
                        key={todo.id}
                        onClick={() => todoClick(todo.id)}
                        style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
                    >
                        {todo.text}
                    </li>
                ))}
            </ul>
            <form onSubmit={formSubmit}>
                <input type="text" value={inputValue} onChange={handleInputChange} />
                <button type="submit">Добавить</button>
            </form>
        </div>
    );
}

export default TodoList;