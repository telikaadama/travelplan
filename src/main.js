// This file is the entry point for the JavaScript application, initializing the app and rendering components.
import L from 'leaflet';
import './styles/main.css';
import Header from './components/header.js';
import WelcomeSection from './components/welcomeSection.js';
import Map from './components/map.js';
import ItineraryBuilder from './components/itineraryBuilder.js';
import BudgetTracker from './components/budgetTracker.js';
import PriceComparison from './components/priceComparison.js';
import Flights from './components/flights.js';
import Events from './components/events.js';
import LocalEvents from './components/localEvents.js';
import Weather from './components/weather.js';
import WeatherIntegration from './components/weatherIntegration.js';
import ShareableLink from './components/shareableLink.js';
import Settings from './components/settings.js';
import Footer from './components/footer.js';
import SuperUserLogin from './components/superUserLogin.js';
import MyTrips from './components/myTrips.js';
import PriceBudgetFlex from './components/PriceBudgetFlex.js';

// Helper to render HTML string to #root
function render(html) {
  document.getElementById('root').innerHTML = html;
}

// Helper to render DOM elements to #root
function renderElements(...elements) {
  const root = document.getElementById('root');
  root.innerHTML = '';
  elements.forEach(el => {
    if (el) root.appendChild(el);
  });
}

function App() {
  return `<h1>Hello, Wanderlog Lite!</h1>`;
}

// Home page render
function renderHome() {
  renderElements(
    Header(),
    WelcomeSection(), // <-- Add WelcomeSection right after Header
    ItineraryBuilder(),
    MyTrips(),
    PriceBudgetFlex(),
    Flights(),
    Map(),
    // LocalEvents(),
    Events(),
    ShareableLink(),
    // Settings(), // <-- Removed from home page
    // SuperUserLogin(),
    Footer() // <-- Ensure Footer is included here
  );

  // Initialize map after DOM update
  setTimeout(() => {
    const mapContainer = document.getElementById('map');
    if (mapContainer && !mapContainer._leaflet_id) {
      L.map('map').setView([0, 0], 2);
    }
  }, 0);
}

// Routing logic
function handleRoute() {
  const hash = window.location.hash;
  if (hash === '#/weather') {
      renderElements(Header(), Weather(), Footer());
  } else if (hash === '#/flights') {
    renderElements(Header(), Flights(), Footer());
  } else if (hash === '#/events') {
    renderElements(Header(), Events(), Footer());
  } else if (hash === '#/superuser') {
    renderElements(Header(), SuperUserLogin(), Footer());
  } else if (hash === '#/trips') {
    renderElements(Header(), MyTrips({}), Footer());
  } else if (hash === '#/settings') {
    renderElements(Header(), Settings(), Footer());
  } else {
    renderHome();
  }
}

window.addEventListener('hashchange', handleRoute);
document.addEventListener('DOMContentLoaded', handleRoute);

// Add Leaflet CSS for map styling (optional, since you already have it in index.html)
const style = document.createElement('style');
style.textContent = `
#map {
    width: 100%;
    height: 400px;
    min-height: 300px;
    border-radius: 12px;
    margin: 2rem 0 2rem 0;
    box-shadow: 0 2px 8px rgba(66,133,244,0.07);
    z-index: 1;
}
.map-controls {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
    justify-content: flex-end;
}
`;
document.head.appendChild(style);

// You can add further logic for APIs and event listeners after rendering if needed


