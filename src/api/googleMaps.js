// This file contains functions for interacting with the Google Maps API, such as fetching location data and displaying maps.

const API_KEY = '796e0cdad8dc4b75861255a608800bcc'; // Replace with your actual API key

export const fetchLocationData = async (query) => {
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(query)}&key=${API_KEY}`);
    if (!response.ok) {
        throw new Error('Failed to fetch location data');
    }
    const data = await response.json();
    return data.results;
};

export const initMap = (mapElement, location) => {
    const map = new google.maps.Map(mapElement, {
        center: location,
        zoom: 12,
    });

    // Place a marker at the initial location
    new google.maps.Marker({
        position: location,
        map: map,
        title: "Initial Location"
    });

    // Try to use the Geolocation API to center the map on the user's current location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                const userLocation = {
                    lat: pos.coords.latitude,
                    lng: pos.coords.longitude
                };
                map.setCenter(userLocation);
                new google.maps.Marker({
                    position: userLocation,
                    map: map,
                    title: "Your Location",
                    icon: {
                        url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
                    }
                });
            },
            (err) => {
                // If denied or unavailable, keep the default location
                console.warn("Geolocation not available or denied.", err);
            }
        );
    }
};