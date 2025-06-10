// This file contains functions to access the Skyscanner API for flight and travel data.

const API_KEY = 'YOUR_API_KEY'; // Replace with your Skyscanner API key
const BASE_URL = 'https://partners.api.skyscanner.net/apiservices';

// Function to fetch flight data from Skyscanner
export const fetchFlights = async (origin, destination, date) => {
    const response = await fetch(`${BASE_URL}/browsequotes/v1.0/US/USD/en-US/${origin}/${destination}/${date}?apiKey=${API_KEY}`);
    if (!response.ok) {
        throw new Error('Failed to fetch flight data');
    }
    return await response.json();
};

// Function to fetch the list of destinations (for autocomplete)
export const fetchDestinations = async (query) => {
    const response = await fetch(`${BASE_URL}/autosuggest/v1.0/US/USD/en-US/?query=${query}&apiKey=${API_KEY}`);
    if (!response.ok) {
        throw new Error('Failed to fetch destinations');
    }
    return await response.json();
};