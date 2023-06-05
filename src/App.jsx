import React, { useState } from 'react';
import Weather from './theweather/WeatherComponent';

const App = () => {
    const [city, setCity] = useState('LVIV');

    return (
        <div>
            <h1>Weather App</h1>
            <input type="text" value={city} onChange={(event) => setCity(event.target.value)} />
            <Weather city={city} />
        </div>
    );
};

export default App;