// Responsive Weather Page Component with Global Weather API Search & Autocomplete

export default function WeatherPage() {
    const div = document.createElement('div');
    div.className = 'weather-page';
    div.innerHTML = `
        <h2 style="color:#1976d2;margin-top:2rem;">Weather</h2>
        <form id="weather-form" style="margin-bottom:1.5rem;display:flex;gap:0.5rem;flex-wrap:wrap;">
            <input id="weather-location" type="text" placeholder="Enter city or country..." autocomplete="off"
                style="flex:1;min-width:180px;padding:0.5rem;border-radius:6px;border:1px solid #cfd8dc;">
            <button type="submit" style="padding:0.5rem 1rem;border-radius:6px;background:#1976d2;color:#fff;border:none;cursor:pointer;">Get Weather</button>
        </form>
        <ul id="weather-autocomplete" class="weather-autocomplete-list" style="display:none;"></ul>
        <div id="weather-result" style="margin-top:1.5rem;"></div>
        <div id="recent-weather" style="margin-top:1.5rem;"></div>
        <button id="toggle-theme" style="margin-top:1.5rem;padding:0.4rem 1rem;border-radius:6px;background:#eee;color:#333;border:none;cursor:pointer;">🌙 Dark Mode</button>
    `;

    // Responsive CSS & Autocomplete styles (inject only once)
    if (!document.getElementById('weather-css')) {
        const style = document.createElement('style');
        style.id = 'weather-css';
        style.textContent = `
        .weather-page {
            max-width: 500px;
            margin: 2rem auto;
            background: #fff;
            border-radius: 12px;
            box-shadow: 0 2px 16px rgba(0,0,0,0.07);
            padding: 2rem 1.5rem;
            position: relative;
        }
        #weather-result {
            min-height: 80px;
            font-size: 1.1rem;
        }
        .weather-autocomplete-list {
            list-style: none;
            margin: 0;
            padding: 0;
            position: absolute;
            left: 0;
            right: 0;
            background: #fff;
            border: 1px solid #cfd8dc;
            border-radius: 6px;
            max-height: 180px;
            overflow-y: auto;
            z-index: 10;
            box-shadow: 0 2px 8px rgba(66,133,244,0.07);
            animation: fadeIn 0.2s;
        }
        .weather-autocomplete-list li {
            padding: 0.5rem 1rem;
            cursor: pointer;
        }
        .weather-autocomplete-list li:hover {
            background: #e3eafc;
        }
        #recent-weather ul {
            list-style: none;
            margin: 0;
            padding: 0;
        }
        #recent-weather li {
            padding: 0.4rem 0.7rem;
            border-radius: 6px;
            margin-bottom: 0.3rem;
            background: #f5f7fa;
            cursor: pointer;
            font-size: 0.98em;
        }
        #recent-weather li:hover {
            background: #e3eafc;
        }
        .dark-mode {
            background: #23272f !important;
            color: #f5f7fa !important;
        }
        .dark-mode input, .dark-mode button, .dark-mode .weather-autocomplete-list, .dark-mode #weather-result, .dark-mode #recent-weather li {
            background: #23272f !important;
            color: #f5f7fa !important;
            border-color: #444 !important;
        }
        .dark-mode .weather-autocomplete-list li:hover,
        .dark-mode #recent-weather li:hover {
            background: #333d4b !important;
        }
        @media (max-width: 600px) {
            .weather-page {
                padding: 1rem 0.5rem;
            }
            #weather-form {
                flex-direction: column;
                gap: 0.7rem;
            }
        }
        @keyframes fadeIn {
            from { opacity: 0;}
            to { opacity: 1;}
        }
        `;
        document.head.appendChild(style);
    }

    // --- Autocomplete for global cities/countries ---
    const input = div.querySelector('#weather-location');
    const autocompleteList = div.querySelector('#weather-autocomplete');
    let allCountries = [];
    let allCities = [];

    // Fetch all countries for autocomplete
    async function fetchAllCountries() {
        const res = await fetch('https://restcountries.com/v3.1/all?fields=name,capital,population');
        if (!res.ok) return [];
        const countries = await res.json();
        return countries.map(c => c.name.common).sort((a, b) => a.localeCompare(b));
    }

    // Fetch top world cities for autocomplete (static sample for demo)
    async function fetchTopCities() {
        return [
            "New York", "London", "Tokyo", "Paris", "Sydney", "Berlin", "Moscow", "Beijing", "Rio de Janeiro", "Cape Town",
            "Toronto", "Dubai", "Singapore", "Los Angeles", "Rome", "Istanbul", "Bangkok", "Delhi", "Mexico City", "Madrid"
        ];
    }

    // Populate autocomplete data
    fetchAllCountries().then(countries => { allCountries = countries; });
    fetchTopCities().then(cities => { allCities = cities; });

    function showAutocomplete(matches) {
        autocompleteList.innerHTML = '';
        if (!matches.length) {
            autocompleteList.style.display = 'none';
            return;
        }
        matches.forEach(place => {
            const li = document.createElement('li');
            li.textContent = place;
            li.addEventListener('mousedown', () => {
                input.value = place;
                autocompleteList.style.display = 'none';
            });
            autocompleteList.appendChild(li);
        });
        autocompleteList.style.display = 'block';
    }

    input.addEventListener('input', () => {
        const val = input.value.trim().toLowerCase();
        if (!val) {
            showAutocomplete([...allCities, ...allCountries].slice(0, 10));
            return;
        }
        const matches = [...allCities, ...allCountries].filter(
            p => p.toLowerCase().startsWith(val)
        ).slice(0, 10);
        showAutocomplete(matches);
    });
    input.addEventListener('focus', () => {
        if (!input.value.trim()) showAutocomplete([...allCities, ...allCountries].slice(0, 10));
    });
    document.addEventListener('click', (e) => {
        if (!div.contains(e.target)) autocompleteList.style.display = 'none';
    });

    // --- Recent Weather Searches ---
    let recentWeather = JSON.parse(localStorage.getItem('recentWeather') || '[]');
    function renderRecentWeather() {
        const recentDiv = div.querySelector('#recent-weather');
        if (!recentWeather.length) {
            recentDiv.innerHTML = '';
            return;
        }
        recentDiv.innerHTML = `<strong>Recent Searches:</strong>
            <ul>
                ${recentWeather.map((r, i) => `<li data-idx="${i}">${r}</li>`).join('')}
            </ul>`;
        recentDiv.querySelectorAll('li').forEach(li => {
            li.onclick = () => {
                input.value = li.textContent;
                input.dispatchEvent(new Event('input'));
            };
        });
    }
    renderRecentWeather();

    // --- Weather API Integration (Open-Meteo, no API key needed) ---
    div.querySelector('#weather-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const query = input.value.trim();
        const resultDiv = div.querySelector('#weather-result');
        if (!query) {
            resultDiv.innerHTML = `<span style="color:#d32f2f;">Please enter a location.</span>`;
            return;
        }
        resultDiv.innerHTML = 'Loading weather...';

        try {
            const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=1&language=en&format=json`);
            const geoData = await geoRes.json();
            if (!geoData.results || !geoData.results[0]) {
                resultDiv.innerHTML = `<span style="color:#d32f2f;">Location not found.</span>`;
                return;
            }
            const { latitude, longitude, name, country } = geoData.results[0];

            const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
            const weatherData = await weatherRes.json();
            if (!weatherData.current_weather) {
                resultDiv.innerHTML = `<span style="color:#d32f2f;">Weather data not available.</span>`;
                return;
            }
            const w = weatherData.current_weather;
            resultDiv.innerHTML = `
                <div style="margin-top:1rem;">
                    <strong style="font-size:1.2rem;">${name}${country ? ', ' + country : ''}</strong><br>
                    <span style="font-size:2.2rem;font-weight:700;">${w.temperature}&deg;C</span>
                    <span style="font-size:1.1rem;">${weatherIcon(w.weathercode)} ${weatherDescription(w.weathercode)}</span><br>
                    <span>Wind: ${w.windspeed} km/h</span>
                </div>
            `;
            // Save to recent
            if (!recentWeather.includes(query)) {
                recentWeather.unshift(query);
                recentWeather = recentWeather.slice(0, 5);
                localStorage.setItem('recentWeather', JSON.stringify(recentWeather));
                renderRecentWeather();
            }
        } catch {
            resultDiv.innerHTML = `<span style="color:#d32f2f;">Error fetching weather data.</span>`;
        }
    });

    // Weather icon and description helpers (Open-Meteo codes)
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

    // --- Dark/Light Mode Toggle ---
    const themeBtn = div.querySelector('#toggle-theme');
    let dark = false;
    themeBtn.onclick = () => {
        dark = !dark;
        if (dark) {
            div.classList.add('dark-mode');
            themeBtn.textContent = '☀️ Light Mode';
        } else {
            div.classList.remove('dark-mode');
            themeBtn.textContent = '🌙 Dark Mode';
        }
    };

    // --- Accessibility: Keyboard navigation for autocomplete ---
    let selectedIdx = -1;
    input.addEventListener('keydown', (e) => {
        const items = autocompleteList.querySelectorAll('li');
        if (!items.length) return;
        if (e.key === 'ArrowDown') {
            selectedIdx = (selectedIdx + 1) % items.length;
            items.forEach((li, i) => li.style.background = i === selectedIdx ? '#e3eafc' : '');
            e.preventDefault();
        } else if (e.key === 'ArrowUp') {
            selectedIdx = (selectedIdx - 1 + items.length) % items.length;
            items.forEach((li, i) => li.style.background = i === selectedIdx ? '#e3eafc' : '');
            e.preventDefault();
        } else if (e.key === 'Enter' && selectedIdx >= 0) {
            input.value = items[selectedIdx].textContent;
            autocompleteList.style.display = 'none';
            selectedIdx = -1;
            e.preventDefault();
        }
    });
    input.addEventListener('blur', () => { selectedIdx = -1; });

    return div;
}