import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setWeather } from './weather';

const WeatherComponent = ({ weather, setWeather, city }) => {
    useEffect(() => {
        fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5d066958a60d315387d9492393935c19`
        )
            .then((response) => response.json())
            .then((data) => {
                const weatherData = {
                    temperature: data.main.temp,
                    pressure: data.main.pressure,
                    description: data.weather[0].description,
                    humidity: data.main.humidity,
                    windSpeed: data.wind.speed,
                    windDirection: data.wind.deg,
                    icon: data.weather[0].icon,
                };

                setWeather(weatherData);
            });
    }, [setWeather, city]);

    if (!weather.temperature) {
        return <p>Loading weather...</p>;
    }

    return (
        <div>
            <p>Temperature: {weather.temperature}°C</p>
            <p>Pressure: {weather.pressure} hPa</p>
            <p>Description: {weather.description}</p>
            <p>Humidity: {weather.humidity}%</p>
            <p>Wind Speed: {weather.windSpeed} m/s</p>
            <p>Wind Direction: {weather.windDirection}°</p>
            <img src={`http://openweathermap.org/img/w/${weather.icon}.png`} alt="Weather Icon" />
        </div>
    );
};

const mapStateToProps = (state) => ({
    weather: state.weather,
});

export default connect(mapStateToProps, { setWeather })(WeatherComponent);