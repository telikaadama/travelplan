// Enhanced Responsive Events Page Component with Search, API, and Dynamic Features
export default function EventsPage() {
    const div = document.createElement('div');
    div.className = 'events-page';
    div.innerHTML = `
    <h2 style="color:#1976d2;margin-top:2rem;">Events</h2>
    <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" 
         alt="Events Banner" 
         style="width:100%;max-height:180px;object-fit:cover;border-radius:10px;margin-bottom:1.2rem;">
    <form id="event-form" style="margin-bottom:1.5rem;display:flex;gap:0.5rem;flex-wrap:wrap;">
        <input id="event-location" type="text" placeholder="Enter city or country..." autocomplete="off"
            style="flex:1;min-width:180px;padding:0.5rem;border-radius:6px;border:1px solid #cfd8dc;">
        <button type="submit" style="padding:0.5rem 1rem;border-radius:6px;background:#1976d2;color:#fff;border:none;cursor:pointer;">Find Events</button>
        <button type="button" id="clear-events" style="padding:0.5rem 1rem;border-radius:6px;background:#eee;color:#333;border:none;cursor:pointer;">Clear</button>
    </form>
    <div id="event-autocomplete" class="event-autocomplete-list" style="display:none;"></div>
    <div id="event-controls" style="margin-bottom:1rem;display:flex;gap:0.7em;align-items:center;flex-wrap:wrap;"></div>
    <div id="event-list" style="margin-top:1.5rem;"></div>
    <div id="favorite-events" style="margin-top:1.5rem;"></div>
`;

    // Responsive CSS (inject only once)
    if (!document.getElementById('events-css')) {
        const style = document.createElement('style');
        style.id = 'events-css';
        style.textContent = `
        .events-page {
            max-width: 600px;
            margin: 2rem auto;
            background: #fff;
            border-radius: 12px;
            box-shadow: 0 2px 16px rgba(0,0,0,0.07);
            padding: 2rem 1.5rem;
        }
        #event-list {
            min-height: 80px;
            font-size: 1.1rem;
        }
        .event-card {
            background: #f7f9fa;
            border-radius: 8px;
            box-shadow: 0 1px 8px rgba(66,133,244,0.08);
            padding: 1rem 1.2rem;
            margin-bottom: 1rem;
            transition: box-shadow 0.2s, transform 0.2s;
            display: flex;
            flex-direction: column;
            gap: 0.3em;
        }
        .event-card:hover {
            box-shadow: 0 4px 16px rgba(66,133,244,0.13);
            transform: translateY(-2px) scale(1.02);
        }
        .event-title {
            font-size: 1.15rem;
            font-weight: 600;
            color: #1976d2;
            margin-bottom: 0.3rem;
        }
        .event-date {
            color: #555;
            font-size: 0.98rem;
            margin-bottom: 0.2rem;
        }
        .event-location {
            color: #888;
            font-size: 0.95rem;
        }
        .event-actions {
            margin-top: 0.5em;
            display: flex;
            gap: 0.7em;
            flex-wrap: wrap;
        }
        .event-actions button {
            padding: 0.3em 0.8em;
            border-radius: 6px;
            border: none;
            cursor: pointer;
            background: #e3eafc;
            color: #1976d2;
            font-size: 0.97em;
        }
        .event-actions button.fav {
            background: #fffbe6;
            color: #ffb300;
        }
        .event-actions button.share {
            background: #e0f7fa;
            color: #00838f;
        }
        .event-autocomplete-list {
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
            margin-top: -1.2em;
        }
        .event-autocomplete-list div {
            padding: 0.5rem 1rem;
            cursor: pointer;
        }
        .event-autocomplete-list div:hover {
            background: #e3eafc;
        }
        #favorite-events ul {
            list-style: none;
            margin: 0;
            padding: 0;
        }
        #favorite-events li {
            padding: 0.4rem 0.7rem;
            border-radius: 6px;
            margin-bottom: 0.3rem;
            background: #f5f7fa;
            cursor: pointer;
            font-size: 0.98em;
            display: flex;
            align-items: center;
            gap: 0.5em;
        }
        #favorite-events li button {
            color: #d32f2f;
            background: none;
            border: none;
            cursor: pointer;
            font-size: 1em;
        }
        .event-list-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 1rem;
        }
        @media (max-width: 600px) {
            .events-page {
                padding: 1rem 0.5rem;
            }
            #event-form {
                flex-direction: column;
                gap: 0.7rem;
            }
            .event-card {
                padding: 0.7rem 0.5rem;
            }
            .event-list-grid {
                grid-template-columns: 1fr;
            }
        }
        `;
        document.head.appendChild(style);
    }

    // --- State ---
    let favoriteEvents = JSON.parse(localStorage.getItem('favoriteEvents') || '[]');
    let gridView = false;
    let allEvents = [];
    let lastQuery = '';

    // --- Controls: Sort, Grid/List, Date Filter ---
    const controls = div.querySelector('#event-controls');
    controls.innerHTML = `
        <label for="sort-events" style="font-size:0.98em;">Sort by:</label>
        <select id="sort-events" style="padding:0.3em 0.7em;border-radius:6px;border:1px solid #cfd8dc;">
            <option value="date">Date</option>
            <option value="title">Title</option>
        </select>
        <button id="toggle-view" style="padding:0.3em 0.8em;border-radius:6px;background:#e3eafc;color:#1976d2;border:none;cursor:pointer;">Grid/List</button>
        <label for="from-date" style="font-size:0.98em;margin-left:1em;">From:</label>
        <input type="date" id="from-date" style="padding:0.2em 0.5em;border-radius:6px;border:1px solid #cfd8dc;">
        <label for="to-date" style="font-size:0.98em;">To:</label>
        <input type="date" id="to-date" style="padding:0.2em 0.5em;border-radius:6px;border:1px solid #cfd8dc;">
        <button id="filter-date" style="padding:0.3em 0.8em;border-radius:6px;background:#e3eafc;color:#1976d2;border:none;cursor:pointer;">Filter</button>
    `;

    // --- Autocomplete for event location ---
    const eventLocationInput = div.querySelector('#event-location');
    const autocompleteBox = div.querySelector('#event-autocomplete');
    eventLocationInput.addEventListener('input', () => {
        const val = eventLocationInput.value.trim().toLowerCase();
        if (!val) {
            autocompleteBox.style.display = 'none';
            return;
        }
        // Use demo locations or last fetched events
        const locations = [...new Set(allEvents.map(ev => ev.location?.split(',')[0] || ''))].filter(Boolean);
        const matches = locations.filter(loc => loc.toLowerCase().startsWith(val));
        if (!matches.length) {
            autocompleteBox.style.display = 'none';
            return;
        }
        autocompleteBox.innerHTML = matches.map(loc => `<div>${loc}</div>`).join('');
        autocompleteBox.style.display = 'block';
        autocompleteBox.querySelectorAll('div').forEach((el, idx) => {
            el.onclick = () => {
                eventLocationInput.value = matches[idx];
                autocompleteBox.style.display = 'none';
            };
        });
    });
    document.addEventListener('click', (e) => {
        if (!div.contains(e.target)) autocompleteBox.style.display = 'none';
    });

    // --- Favorite Events ---
    function renderFavoriteEvents() {
        const favDiv = div.querySelector('#favorite-events');
        if (!favoriteEvents.length) {
            favDiv.innerHTML = '';
            return;
        }
        favDiv.innerHTML = `<strong>Favorite Events:</strong>
            <ul>
                ${favoriteEvents.map((ev, i) => `<li>
                    <span class="fav-title" style="flex:1;">${ev.title} (${ev.location})</span>
                    <button data-remove="${i}" title="Remove">✕</button>
                </li>`).join('')}
            </ul>`;
        favDiv.querySelectorAll('button[data-remove]').forEach(btn => {
            btn.onclick = () => {
                const idx = +btn.getAttribute('data-remove');
                favoriteEvents.splice(idx, 1);
                localStorage.setItem('favoriteEvents', JSON.stringify(favoriteEvents));
                renderFavoriteEvents();
            };
        });
        favDiv.querySelectorAll('.fav-title').forEach((el, idx) => {
            el.onclick = () => {
                renderEvents([favoriteEvents[idx]]);
            };
        });
    }

    // --- Render events with actions ---
    function renderEvents(events) {
        const list = div.querySelector('#event-list');
        if (!events.length) {
            list.innerHTML = `<span style="color:#d32f2f;">No events found for this location.</span>`;
            list.className = '';
            return;
        }
        list.className = gridView ? 'event-list-grid' : '';
        list.innerHTML = events.map((ev, idx) => `
        <div class="event-card">
            <img src="https://img.icons8.com/color/96/000000/calendar--v1.png" 
                 alt="Event" style="width:48px;height:48px;border-radius:8px;margin-bottom:0.5em;align-self:flex-start;">
            <div class="event-title">${ev.title}</div>
            <div class="event-date">${ev.date ? `<i class="fas fa-calendar-alt"></i> ${ev.date}` : ''}</div>
            <div class="event-location">${ev.location ? `<i class="fas fa-map-marker-alt"></i> ${ev.location}` : ''}</div>
            <div class="event-desc">${ev.description || ''}</div>
            <div class="event-actions">
                <button class="fav" data-idx="${idx}" title="Add to favorites">★</button>
                <button class="share" data-idx="${idx}" title="Copy event info">Copy</button>
                ${ev.url ? `<a href="${ev.url}" target="_blank" style="text-decoration:none;"><button type="button" class="share" style="background:#d1ffd6;color:#388e3c;">Visit</button></a>` : ''}
            </div>
        </div>
    `).join('');
        // Favorite button
        list.querySelectorAll('button.fav').forEach(btn => {
            btn.onclick = () => {
                const idx = +btn.getAttribute('data-idx');
                const ev = events[idx];
                if (!favoriteEvents.some(f => f.title === ev.title && f.date === ev.date)) {
                    favoriteEvents.unshift(ev);
                    favoriteEvents = favoriteEvents.slice(0, 5);
                    localStorage.setItem('favoriteEvents', JSON.stringify(favoriteEvents));
                    renderFavoriteEvents();
                }
            };
        });
        // Copy/share button
        list.querySelectorAll('button.share').forEach(btn => {
            btn.onclick = () => {
                const idx = +btn.getAttribute('data-idx');
                const ev = events[idx];
                const text = `${ev.title} - ${ev.date || ''}\n${ev.location || ''}\n${ev.description || ''}`;
                navigator.clipboard.writeText(text);
                btn.textContent = 'Copied!';
                setTimeout(() => btn.textContent = 'Copy', 1200);
            };
        });
    }

    // --- Sort/Filter Logic ---
    function getFilteredAndSortedEvents() {
        let filtered = [...allEvents];
        // Date filter
        const from = div.querySelector('#from-date').value;
        const to = div.querySelector('#to-date').value;
        if (from) filtered = filtered.filter(ev => ev.date >= from);
        if (to) filtered = filtered.filter(ev => ev.date <= to);
        // Search filter
        const query = eventLocationInput.value.trim().toLowerCase();
        if (query) {
            filtered = filtered.filter(ev =>
                (ev.location || '').toLowerCase().includes(query) ||
                (ev.title || '').toLowerCase().includes(query)
            );
        }
        // Sort
        const sortVal = div.querySelector('#sort-events').value;
        if (sortVal === 'date') {
            filtered.sort((a, b) => (a.date || '').localeCompare(b.date || ''));
        } else if (sortVal === 'title') {
            filtered.sort((a, b) => (a.title || '').localeCompare(b.title || ''));
        }
        return filtered;
    }

    div.querySelector('#sort-events').onchange = () => {
        renderEvents(getFilteredAndSortedEvents());
    };
    div.querySelector('#toggle-view').onclick = () => {
        gridView = !gridView;
        renderEvents(getFilteredAndSortedEvents());
    };
    div.querySelector('#filter-date').onclick = () => {
        renderEvents(getFilteredAndSortedEvents());
    };

    // --- Clear search ---
    div.querySelector('#clear-events').onclick = () => {
        eventLocationInput.value = '';
        div.querySelector('#from-date').value = '';
        div.querySelector('#to-date').value = '';
        renderEvents(getFilteredAndSortedEvents());
    };

    // --- Fetch events from API (Ticketmaster public API as example) ---
    async function fetchEvents(query) {
        // You can replace this with your preferred events API
        // Ticketmaster API: https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/
        // Demo key is used for public demo purposes only
        const apiKey = '8dAqA1A4AqGvQK7QkA1AqGvQK7QkA1AqG'; // Replace with your own for production
        const url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKey}&size=10&keyword=${encodeURIComponent(query)}`;
        try {
            const res = await fetch(url);
            const data = await res.json();
            if (data._embedded && data._embedded.events) {
                return data._embedded.events.map(ev => ({
                    title: ev.name,
                    date: ev.dates?.start?.localDate || '',
                    location: ev._embedded?.venues?.[0]?.city?.name
                        ? `${ev._embedded.venues[0].city.name}, ${ev._embedded.venues[0].country?.name || ''}` : '',
                    description: ev.info || ev.pleaseNote || '',
                    url: ev.url
                }));
            }
        } catch (e) {
            // fallback to demo events
        }
        return [];
    }

    // --- Handle search form ---
    div.querySelector('#event-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const query = eventLocationInput.value.trim();
        lastQuery = query;
        if (!query) {
            allEvents = demoEvents;
            renderEvents(getFilteredAndSortedEvents());
            return;
        }
        div.querySelector('#event-list').innerHTML = 'Loading events...';
        const apiEvents = await fetchEvents(query);
        allEvents = apiEvents.length ? apiEvents : demoEvents;
        renderEvents(getFilteredAndSortedEvents());
    });

    // --- Demo events fallback ---
    const demoEvents = [
        {
            title: "City Food Festival",
            date: "2025-06-15",
            location: "New York, USA",
            description: "Taste the best food from around the world."
        },
        {
            title: "Summer Music Concert",
            date: "2025-07-02",
            location: "London, UK",
            description: "Live performances by top artists."
        },
        {
            title: "Art & Culture Expo",
            date: "2025-08-10",
            location: "Paris, France",
            description: "Explore art and culture exhibits."
        }
    ];

    // --- Initial render ---
    allEvents = demoEvents;
    renderEvents(getFilteredAndSortedEvents());
    renderFavoriteEvents();

    return div;
}