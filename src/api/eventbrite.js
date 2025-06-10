// This file provides functions to interact with the Eventbrite API, allowing users to fetch event data.

const EVENTBRITE_API_URL = 'https://www.eventbrite.com/api/v3/';

// Function to fetch events based on a search query
export const fetchEvents = async (query) => {
    try {
        const response = await fetch(`${EVENTBRITE_API_URL}events/search/?q=${encodeURIComponent(query)}`, {
            headers: {
                'Authorization': `Bearer YOUR_ACCESS_TOKEN`
            }
        });
        if (!response.ok) {
            throw new Error('Failed to fetch events');
        }
        const data = await response.json();
        return data.events;
    } catch (error) {
        console.error('Error fetching events:', error);
        return [];
    }
};

// Function to fetch event details by event ID
export const fetchEventDetails = async (eventId) => {
    try {
        const response = await fetch(`${EVENTBRITE_API_URL}events/${eventId}/`, {
            headers: {
                'Authorization': `Bearer YOUR_ACCESS_TOKEN`
            }
        });
        if (!response.ok) {
            throw new Error('Failed to fetch event details');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching event details:', error);
        return null;
    }
};