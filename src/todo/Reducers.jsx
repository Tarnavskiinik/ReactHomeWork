import { TOGGLE_TODO } from './Actions';

const initialState = {
    todos: [
        { id: 1, text: 'Сходить за Хлебом', done: false },
        { id: 2, text: 'Сходить на тренинг', done: false },
        { id: 3, text: 'Отвести сына на тренировку', done: false },
    ],
};

export default function todoReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, action.todo],
            };
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === action.id ? { ...todo, done: !todo.done } : todo
                ),
            };
        default:
            return state;
    }
}