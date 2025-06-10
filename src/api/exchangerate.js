// This file contains functions to retrieve exchange rate information from a currency exchange API.

const API_URL = 'https://api.exchangerate-api.com/v4/latest/';

// Function to fetch exchange rates for a given base currency
export const fetchExchangeRates = async (baseCurrency) => {
    try {
        const response = await fetch(`${API_URL}${baseCurrency}`);
        if (!response.ok) {
            throw new Error('Failed to fetch exchange rates');
        }
        const data = await response.json();
        return data.rates;
    } catch (error) {
        console.error('Error fetching exchange rates:', error);
        throw error;
    }
};

// Function to convert an amount from one currency to another
export const convertCurrency = async (amount, fromCurrency, toCurrency) => {
    const rates = await fetchExchangeRates(fromCurrency);
    const convertedAmount = (amount * rates[toCurrency]).toFixed(2);
    return convertedAmount;
};

