// Enhanced Flights & Weather Page Component
export default function FlightsPage() {
    const container = document.createElement('div');
    container.className = 'flights-weather-container';

    // Flights Section (left)
    const flightsDiv = document.createElement('div');
    flightsDiv.className = 'flights-page';
    flightsDiv.innerHTML = `
        <h2 style="color:#1976d2;margin-top:2rem;">Flights</h2>
        <img src="https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=800&q=80"
             alt="Flights Banner"
             style="width:100%;max-height:160px;object-fit:cover;border-radius:10px;margin-bottom:1.2rem;">
        <form id="flight-form" style="margin-bottom:1.5rem;display:flex;gap:0.5rem;flex-wrap:wrap;">
            <input id="flight-from" type="text" placeholder="From (City or Airport)" autocomplete="off"
                style="flex:1;min-width:140px;padding:0.5rem;border-radius:6px;border:1px solid #cfd8dc;">
            <input id="flight-to" type="text" placeholder="To (City or Airport)" autocomplete="off"
                style="flex:1;min-width:140px;padding:0.5rem;border-radius:6px;border:1px solid #cfd8dc;">
            <button type="button" id="swap-btn" title="Swap" style="padding:0.5rem 0.7rem;border-radius:6px;background:#e3eafc;color:#1976d2;border:none;cursor:pointer;font-weight:bold;">&#8646;</button>
            <button type="submit" style="padding:0.5rem 1rem;border-radius:6px;background:#1976d2;color:#fff;border:none;cursor:pointer;">Show Route</button>
            <button type="button" id="clear-btn" style="padding:0.5rem 1rem;border-radius:6px;background:#eee;color:#333;border:none;cursor:pointer;">Clear</button>
        </form>
        <div id="flight-map" style="width:100%;height:320px;border-radius:12px;overflow:hidden;margin-bottom:1.5rem;"></div>
        <div id="flight-info" style="margin-top:1rem;"></div>
        <div id="recent-searches" style="margin-top:1.5rem;"></div>
    `;

    // Weather Section (right)
    const weatherDiv = document.createElement('div');
    weatherDiv.className = 'weather-page';
    weatherDiv.innerHTML = `
        <h2 style="color:#388e3c;margin-top:2rem;">Weather</h2>
        <img src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80"
             alt="Weather Banner"
             style="width:100%;max-height:160px;object-fit:cover;border-radius:10px;margin-bottom:1.2rem;">
        <form id="weather-form" style="margin-bottom:1.5rem;display:flex;gap:0.5rem;flex-wrap:wrap;">
            <input id="weather-city" type="text" placeholder="City" autocomplete="off"
                style="flex:1;min-width:140px;padding:0.5rem;border-radius:6px;border:1px solid #cfd8dc;">
            <button type="submit" style="padding:0.5rem 1rem;border-radius:6px;background:#388e3c;color:#fff;border:none;cursor:pointer;">Show Weather</button>
        </form>
        <div id="weather-info" style="margin-top:1rem;min-height:60px;"></div>
    `;

    // Add both to container
    container.appendChild(flightsDiv);
    container.appendChild(weatherDiv);

    // Responsive CSS for layout and sections
    if (!document.getElementById('flights-weather-css')) {
        const style = document.createElement('style');
        style.id = 'flights-weather-css';
        style.textContent = `
        .flights-weather-container {
            display: flex;
            gap: 2rem;
            justify-content: center;
            align-items: flex-start;
            margin: 0 auto;
            max-width: 1200px;
            width: 100%;
        }
        .flights-page, .weather-page {
            flex: 1 1 350px;
            min-width: 0;
            background: #fff;
            border-radius: 12px;
            box-shadow: 0 2px 16px rgba(0,0,0,0.07);
            padding: 2rem 1.5rem;
            margin: 2rem 0;
        }
        .weather-page {
            max-width: 400px;
        }
        @media (max-width: 900px) {
            .flights-weather-container {
                flex-direction: column;
                gap: 1.5rem;
                align-items: stretch;
            }
            .flights-page, .weather-page {
                margin: 1rem 0;
                max-width: 100%;
            }
        }
        @media (max-width: 600px) {
            .flights-page, .weather-page {
                padding: 1rem 0.5rem;
            }
            #flight-form, #weather-form {
                flex-direction: column;
                gap: 0.7rem;
            }
            #flight-map {
                height: 200px;
            }
        }
        `;
        document.head.appendChild(style);
    }

    // --- Weather Logic ---
    weatherDiv.querySelector('#weather-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const city = weatherDiv.querySelector('#weather-city').value.trim();
        const infoDiv = weatherDiv.querySelector('#weather-info');
        if (!city) {
            infoDiv.innerHTML = `<span style="color:#d32f2f;">Please enter a city.</span>`;
            return;
        }
        infoDiv.innerHTML = 'Loading...';
        // Use Open-Meteo geocoding and weather API
        try {
            const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`);
            const geoData = await geoRes.json();
            if (!geoData.results || !geoData.results[0]) {
                infoDiv.innerHTML = `<span style="color:#d32f2f;">City not found.</span>`;
                return;
            }
            const { latitude, longitude, name, country } = geoData.results[0];
            const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
            const weatherData = await weatherRes.json();
            if (!weatherData.current_weather) {
                infoDiv.innerHTML = `<span style="color:#d32f2f;">Weather data unavailable.</span>`;
                return;
            }
            const w = weatherData.current_weather;
            infoDiv.innerHTML = `
                <div>
                    <strong>${name}, ${country}</strong><br>
                    <strong>Temperature:</strong> ${w.temperature}&deg;C<br>
                    <strong>Wind:</strong> ${w.windspeed} km/h<br>
                    <strong>Weather:</strong> ${w.weathercode === 0 ? 'Clear' : 'See Open-Meteo docs'}
                </div>
            `;
        } catch {
            infoDiv.innerHTML = `<span style="color:#d32f2f;">Error fetching weather.</span>`;
        }
    });

    // --- Existing Flights Logic ---
    let leafletLoaded = false;
    let map, routeLine, fromMarker, toMarker;
    let recentSearches = JSON.parse(localStorage.getItem('recentFlights') || '[]');

    function loadLeaflet(callback) {
        if (leafletLoaded) return callback();
        const leafletCss = document.createElement('link');
        leafletCss.rel = 'stylesheet';
        leafletCss.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
        document.head.appendChild(leafletCss);

        const leafletJs = document.createElement('script');
        leafletJs.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
        leafletJs.onload = () => {
            leafletLoaded = true;
            callback();
        };
        document.body.appendChild(leafletJs);
    }

    function initMap() {
        if (map) {
            map.remove();
        }
        map = L.map('flight-map').setView([20, 0], 2);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);
    }

    // Geocode city/airport to lat/lon using Open-Meteo geocoding
    async function geocodeLocation(query) {
        const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=1&language=en&format=json`);
        const data = await res.json();
        if (data.results && data.results[0]) {
            return data.results[0];
        }
        return null;
    }

    // Draw flight route on the map
    function drawFlightRoute(from, to) {
        if (routeLine) map.removeLayer(routeLine);
        if (fromMarker) map.removeLayer(fromMarker);
        if (toMarker) map.removeLayer(toMarker);

        fromMarker = L.marker([from.latitude, from.longitude]).addTo(map).bindPopup(`<b>${from.name}</b>`).openPopup();
        toMarker = L.marker([to.latitude, to.longitude]).addTo(map).bindPopup(`<b>${to.name}</b>`);
        routeLine = L.polyline([[from.latitude, from.longitude], [to.latitude, to.longitude]], { color: 'blue', weight: 4, dashArray: '8 8' }).addTo(map);
        map.fitBounds(routeLine.getBounds(), { padding: [30, 30] });
    }

    // Calculate distance (Haversine formula)
    function calcDistanceKm(lat1, lon1, lat2, lon2) {
        const R = 6371;
        const dLat = (lat2-lat1) * Math.PI/180;
        const dLon = (lon2-lon1) * Math.PI/180;
        const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                  Math.cos(lat1*Math.PI/180) * Math.cos(lat2*Math.PI/180) *
                  Math.sin(dLon/2) * Math.sin(dLon/2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        return R * c;
    }

    // --- New: Show Recent Searches ---
    function renderRecentSearches() {
        const recentDiv = flightsDiv.querySelector('#recent-searches');
        if (!recentSearches.length) {
            recentDiv.innerHTML = '';
            return;
        }
        recentDiv.innerHTML = `<strong>Recent Searches:</strong>
            <ul>
                ${recentSearches.map((r, i) => `<li data-idx="${i}">${r.from} &rarr; ${r.to}</li>`).join('')}
            </ul>`;
        recentDiv.querySelectorAll('li').forEach(li => {
            li.onclick = () => {
                const idx = li.getAttribute('data-idx');
                const r = recentSearches[idx];
                flightsDiv.querySelector('#flight-from').value = r.from;
                flightsDiv.querySelector('#flight-to').value = r.to;
            };
        });
    }

    // --- New: Swap Button ---
    flightsDiv.querySelector('#swap-btn').onclick = () => {
        const fromInput = flightsDiv.querySelector('#flight-from');
        const toInput = flightsDiv.querySelector('#flight-to');
        [fromInput.value, toInput.value] = [toInput.value, fromInput.value];
    };

    // --- New: Clear Button ---
    flightsDiv.querySelector('#clear-btn').onclick = () => {
        flightsDiv.querySelector('#flight-from').value = '';
        flightsDiv.querySelector('#flight-to').value = '';
        flightsDiv.querySelector('#flight-info').innerHTML = '';
        if (map) {
            if (routeLine) map.removeLayer(routeLine);
            if (fromMarker) map.removeLayer(fromMarker);
            if (toMarker) map.removeLayer(toMarker);
        }
    };

    // --- New: Flight Duration Estimate ---
    function estimateDuration(distKm) {
        // Assume average speed 850 km/h, add 30 min for takeoff/landing
        const hours = distKm / 850;
        const totalMins = Math.round(hours * 60 + 30);
        const h = Math.floor(totalMins / 60);
        const m = totalMins % 60;
        return h ? `${h}h ${m}m` : `${m} min`;
    }

    // Handle form submit
    flightsDiv.querySelector('#flight-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const fromVal = flightsDiv.querySelector('#flight-from').value.trim();
        const toVal = flightsDiv.querySelector('#flight-to').value.trim();
        const infoDiv = flightsDiv.querySelector('#flight-info');
        if (!fromVal || !toVal) {
            infoDiv.innerHTML = `<span style="color:#d32f2f;">Please enter both origin and destination.</span>`;
            return;
        }
        infoDiv.innerHTML = 'Searching...';

        loadLeaflet(async () => {
            if (!map) initMap();
            const from = await geocodeLocation(fromVal);
            const to = await geocodeLocation(toVal);
            if (!from || !to) {
                infoDiv.innerHTML = `<span style="color:#d32f2f;">Location not found. Try a different city or airport.</span>`;
                return;
            }
            drawFlightRoute(from, to);
            const dist = calcDistanceKm(from.latitude, from.longitude, to.latitude, to.longitude);
            infoDiv.innerHTML = `
                <div>
                    <strong>Route:</strong> ${from.name} (${from.country}) &rarr; ${to.name} (${to.country})<br>
                    <strong>Distance:</strong> ${dist.toFixed(1)} km<br>
                    <strong>Est. Duration:</strong> ${estimateDuration(dist)}
                </div>
            `;
            // Save to recent searches
            recentSearches.unshift({ from: fromVal, to: toVal });
            recentSearches = recentSearches.slice(0, 3);
            localStorage.setItem('recentFlights', JSON.stringify(recentSearches));
            renderRecentSearches();
        });
    });

    // Render recent searches on load
    renderRecentSearches();

    // --- Add more features to the weather section ---

    // 1. Unit toggle (Celsius/Fahrenheit)
    let useCelsius = true;
    const unitToggle = document.createElement('button');
    unitToggle.textContent = '°F';
    unitToggle.title = 'Switch to Fahrenheit';
    unitToggle.style.cssText = 'margin-left:0.7em;padding:0.3em 0.8em;border-radius:6px;background:#e3eafc;color:#388e3c;border:none;cursor:pointer;';
    weatherDiv.querySelector('form').appendChild(unitToggle);

    unitToggle.onclick = (e) => {
        e.preventDefault();
        useCelsius = !useCelsius;
        unitToggle.textContent = useCelsius ? '°F' : '°C';
        unitToggle.title = useCelsius ? 'Switch to Fahrenheit' : 'Switch to Celsius';
        // If weather is already displayed, re-render it
        const infoDiv = weatherDiv.querySelector('#weather-info');
        if (infoDiv.dataset.weather) {
            const w = JSON.parse(infoDiv.dataset.weather);
            renderWeatherInfo(w, infoDiv);
        }
    };

    // 2. Weather icon and description
    function weatherIcon(code) {
        if ([0].includes(code)) return '☀️';
        if ([1,2,3].includes(code)) return '⛅';
        if ([45,48].includes(code)) return '🌫️';
        if ([51,53,55,56,57,61,63,65,66,67,80,81,82].includes(code)) return '🌧️';
        if ([71,73,75,77,85,86].includes(code)) return '❄️';
        if ([95,96,99].includes(code)) return '⛈️';
        return '';
    }
    function weatherDescription(code) {
        const map = {
            0: "Clear sky", 1: "Mainly clear", 2: "Partly cloudy", 3: "Overcast",
            45: "Fog", 48: "Depositing rime fog",
            51: "Light drizzle", 53: "Drizzle", 55: "Dense drizzle",
            56: "Freezing drizzle", 57: "Dense freezing drizzle",
            61: "Slight rain", 63: "Rain", 65: "Heavy rain",
            66: "Freezing rain", 67: "Heavy freezing rain",
            71: "Slight snow", 73: "Snow", 75: "Heavy snow",
            77: "Snow grains", 80: "Rain showers", 81: "Heavy rain showers", 82: "Violent rain showers",
            85: "Snow showers", 86: "Heavy snow showers",
            95: "Thunderstorm", 96: "Thunderstorm w/ hail", 99: "Thunderstorm w/ heavy hail"
        };
        return map[code] || "Unknown";
    }

    // 3. Save favorite locations
    let favoriteWeather = JSON.parse(localStorage.getItem('favoriteWeather') || '[]');
    const favBtn = document.createElement('button');
    favBtn.textContent = '★';
    favBtn.title = 'Add to favorites';
    favBtn.style.cssText = 'margin-left:0.7em;padding:0.3em 0.8em;border-radius:6px;background:#fffbe6;color:#ffb300;border:none;cursor:pointer;';
    weatherDiv.querySelector('form').appendChild(favBtn);

    favBtn.onclick = (e) => {
        e.preventDefault();
        const city = weatherDiv.querySelector('#weather-city').value.trim();
        if (city && !favoriteWeather.includes(city)) {
            favoriteWeather.unshift(city);
            favoriteWeather = favoriteWeather.slice(0, 5);
            localStorage.setItem('favoriteWeather', JSON.stringify(favoriteWeather));
            renderFavoriteWeather();
        }
    };

    function renderFavoriteWeather() {
        let favDiv = weatherDiv.querySelector('#favorite-weather');
        if (!favDiv) {
            favDiv = document.createElement('div');
            favDiv.id = 'favorite-weather';
            favDiv.style.marginTop = '1.2rem';
            weatherDiv.appendChild(favDiv);
        }
        if (!favoriteWeather.length) {
            favDiv.innerHTML = '';
            return;
        }
        favDiv.innerHTML = `<strong>Favorite Locations:</strong>
            <ul style="margin:0.5em 0 0 0;padding:0;">
                ${favoriteWeather.map((c, i) => `<li style="display:flex;align-items:center;gap:0.5em;margin-bottom:0.2em;">
                    <span class="fav-city" style="cursor:pointer;color:#388e3c;text-decoration:underline;">${c}</span>
                    <button data-remove="${i}" style="color:#d32f2f;background:none;border:none;cursor:pointer;">✕</button>
                </li>`).join('')}
            </ul>`;
        favDiv.querySelectorAll('.fav-city').forEach((el, idx) => {
            el.onclick = () => {
                weatherDiv.querySelector('#weather-city').value = favoriteWeather[idx];
            };
        });
        favDiv.querySelectorAll('button[data-remove]').forEach(btn => {
            btn.onclick = () => {
                const idx = +btn.getAttribute('data-remove');
                favoriteWeather.splice(idx, 1);
                localStorage.setItem('favoriteWeather', JSON.stringify(favoriteWeather));
                renderFavoriteWeather();
            };
        });
    }
    renderFavoriteWeather();

    // 4. Render weather info with icon, description, and unit toggle
    function renderWeatherInfo(w, infoDiv) {
        let temp = w.temperature;
        let unit = '°C';
        if (!useCelsius) {
            temp = (temp * 9/5) + 32;
            unit = '°F';
        }
        infoDiv.innerHTML = `
            <div>
                <span style="font-size:2rem;">${weatherIcon(w.weathercode)}</span><br>
                <strong>Temperature:</strong> ${temp.toFixed(1)}${unit}<br>
                <strong>Wind:</strong> ${w.windspeed} km/h<br>
                <strong>Weather:</strong> ${weatherDescription(w.weathercode)}
            </div>
        `;
        infoDiv.dataset.weather = JSON.stringify(w);
    }

    // --- Update weather form submit to use new renderer ---
    weatherDiv.querySelector('#weather-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const city = weatherDiv.querySelector('#weather-city').value.trim();
        const infoDiv = weatherDiv.querySelector('#weather-info');
        if (!city) {
            infoDiv.innerHTML = `<span style="color:#d32f2f;">Please enter a city.</span>`;
            return;
        }
        infoDiv.innerHTML = 'Loading...';
        try {
            const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`);
            const geoData = await geoRes.json();
            if (!geoData.results || !geoData.results[0]) {
                infoDiv.innerHTML = `<span style="color:#d32f2f;">City not found.</span>`;
                return;
            }
            const { latitude, longitude, name, country } = geoData.results[0];
            const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
            const weatherData = await weatherRes.json();
            if (!weatherData.current_weather) {
                infoDiv.innerHTML = `<span style="color:#d32f2f;">Weather data unavailable.</span>`;
                return;
            }
            const w = weatherData.current_weather;
            renderWeatherInfo(w, infoDiv);
        } catch {
            infoDiv.innerHTML = `<span style="color:#d32f2f;">Error fetching weather.</span>`;
        }
    });

    // 5. Responsive: Make favorite/weather buttons wrap on small screens
    if (!document.getElementById('weather-future-css')) {
        const style = document.createElement('style');
        style.id = 'weather-future-css';
        style.textContent = `
        @media (max-width: 600px) {
            .weather-page form {
                flex-wrap: wrap;
            }
            .weather-page form button {
                margin-top: 0.5em;
                width: 100%;
            }
            #favorite-weather ul {
                padding-left: 0;
            }
            #favorite-weather li {
                flex-direction: column;
                align-items: flex-start;
            }
        }
        `;
        document.head.appendChild(style);
    }

    return container;
}