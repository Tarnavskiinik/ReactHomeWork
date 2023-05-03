import React, { useReducer } from "react";
import {sizes, fillings, toppings} from "./pages/Constants"

const initialState = {
    size: { price: 0, calories: 0 },
    filling: { price: 0, calories: 0 },
    topping: { price: 0, calories: 0 },
};

function reducer(state, action) {
    switch (action.type) {
        case "SELECT_SIZE":
            return { ...state, size: action.payload };
        case "SELECT_FILLING":
            return { ...state, filling: action.payload };
        case "SELECT_TOPPING":
            return { ...state, topping: action.payload };
        default:
            return state;
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const handleSizeChange = (event) => {
        const size = sizes[event.target.value];
        dispatch({ type: "SELECT_SIZE", payload: size });
    };

    const handleFillingChange = (event) => {
        const filling = fillings[event.target.value];
        dispatch({ type: "SELECT_FILLING", payload: filling });
    };

    const handleToppingChange = (event) => {
        const topping = toppings[event.target.value];
        dispatch({ type: "SELECT_TOPPING", payload: topping });
    };

    const totalPrice =
        state.size.price + state.filling.price + state.topping.price;
    const totalCalories =
        state.size.calories + state.filling.calories + state.topping.calories;

    return (
        <div>
            <h2>Выберите размер гамбургера:</h2>
            {sizes.map((size, index) => (
                <label key={index}>
                    <input
                        type="radio"
                        value={index}
                        checked={state.size.name === size.name}
                        onChange={handleSizeChange}
                    />
                    {size.name} ({size.price} тугриков, {size.calories} калорий)
                </label>
            ))}
            <h2>Выберите начинку:</h2>
            {fillings.map((filling, index) => (
                <label key={index}>
                    <input
                        type="radio"
                        value={index}
                        checked={state.filling.name === filling.name}
                        onChange={handleFillingChange}
                    />
                    {filling.name} ({filling.price} тугриков, {filling.calories} калорий)
                </label>
            ))}
            <h2>Выберите добавку:</h2>
            {toppings.map((topping, index) => (
                <label key={index}>
                    <input
                        type="radio"
                        value={index}
                        checked={state.topping.name === topping.name}
                        onChange={handleToppingChange}
                    />
                    {topping.name} ({topping.price} тугриков, {topping.calories} калорий)
                </label>
            ))}
            <h2>Итого:</h2>
            <p>Цена: {totalPrice} тугриков</p>
            <p>Калории: {totalCalories} калорий</p>
        </div>
    );
}

export default App;