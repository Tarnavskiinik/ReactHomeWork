import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, toggleTodo } from './Actions';

function TodoList() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('');

    const todoClick = (id) => {
        dispatch(toggleTodo(id));
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
        dispatch(addTodo(newTodo));
        setInputValue('');
    };

    return (
        <div>
            <ul>
                {todos.map((todo) => (
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