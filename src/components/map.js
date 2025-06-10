// import initMap from './components/map.js';

document.addEventListener('DOMContentLoaded', () => {
    // ...other initializations...
    initMap();
});

export default function initMap() {
    const mapContainer = document.getElementById('map');
    if (!mapContainer) return;

    // Remove any existing map instance to avoid Leaflet errors on re-render
    if (mapContainer._leaflet_id) {
        mapContainer._leaflet_id = null;
        mapContainer.innerHTML = "";
    }

    // Initialize the map centered at a default location
    const map = L.map(mapContainer).setView([51.505, -0.09], 13);

    // Add OpenStreetMap tiles dynamically
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Map controls
    const zoomInBtn = document.getElementById('zoom-in');
    const zoomOutBtn = document.getElementById('zoom-out');
    const currentLocationBtn = document.getElementById('current-location');

    if (zoomInBtn) {
        zoomInBtn.addEventListener('click', () => map.zoomIn());
    }
    if (zoomOutBtn) {
        zoomOutBtn.addEventListener('click', () => map.zoomOut());
    }
    if (currentLocationBtn) {
        currentLocationBtn.addEventListener('click', () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(pos => {
                    map.flyTo([pos.coords.latitude, pos.coords.longitude], 13);
                });
            } else {
                alert("Geolocation is not supported by this browser.");
            }
        });
    }
}

export function Map() {
  return `<div id="map" style="height:400px;"></div>`;
}