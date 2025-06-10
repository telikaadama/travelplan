// This file exports a component that integrates weather data into the application.

import { getWeatherData } from '../api/weather.js';

export default function WeatherIntegration() {
    const weatherContainer = document.createElement('div');
    weatherContainer.classList.add('weather-integration');

    const renderWeather = async (location) => {
        const weatherData = await getWeatherData(location);
        if (weatherData) {
            weatherContainer.innerHTML = `
                <h2>Weather in ${location}</h2>
                <p>Temperature: ${weatherData.temperature}°C</p>
                <p>Condition: ${weatherData.condition}</p>
            `;
        } else {
            weatherContainer.innerHTML = '<p>Weather data not available.</p>';
        }
    };

    return `<section><h2>Weather Integration</h2></section>`;
}