export const SET_WEATHER = 'SET_WEATHER';

const initialState = {
    temperature: null,
    pressure: null,
    description: '',
    humidity: null,
    windSpeed: null,
    windDirection: null,
    icon: '',
};

export const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WEATHER:
            return {
                ...state,
                temperature: action.payload.temperature,
                pressure: action.payload.pressure,
                description: action.payload.description,
                humidity: action.payload.humidity,
                windSpeed: action.payload.windSpeed,
                windDirection: action.payload.windDirection,
                icon: action.payload.icon,
            };
        default:
            return state;
    }
};

export const setWeather = (weatherData) => ({
    type: SET_WEATHER,
    payload: weatherData,
});