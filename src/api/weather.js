// This file includes functions to fetch weather data from a weather API.

const API_KEY = 'YOUR_API_KEY'; // Replace with your actual API key
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeather = async (city) => {
    try {
        const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        if (!response.ok) {
            throw new Error('Failed to fetch weather data');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export async function getWeatherData(location) {
    // Replace this mock with a real API call as needed
    return {
        location,
        forecast: [
            { date: "2025-06-01", temp: "22°C", desc: "Sunny" },
            { date: "2025-06-02", temp: "20°C", desc: "Partly Cloudy" }
        ]
    };
}