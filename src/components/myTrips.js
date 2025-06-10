import '../styles/myTrips.css';

// Example: Simulate API fetch (replace with real API call)
async function fetchTrips() {
    await new Promise(res => setTimeout(res, 400));
    const trips = JSON.parse(localStorage.getItem('myTrips') || '[]');
    return trips;
}

async function saveTrips(trips) {
    localStorage.setItem('myTrips', JSON.stringify(trips));
}

// Fetch weather for a destination (dummy API, replace with real one)
async function fetchWeather(destination) {
    // Simulate API call
    await new Promise(res => setTimeout(res, 300));
    // Example: fetch(`https://api.weatherapi.com/v1/current.json?key=...&q=${destination}`)
    //   .then(res => res.json()).then(data => data.current.condition.text)
    // For demo, return random weather
    const weatherOptions = ['Sunny', 'Cloudy', 'Rainy', 'Windy', 'Snowy'];
    return weatherOptions[Math.floor(Math.random() * weatherOptions.length)];
}

// Helper: Fetch all countries for destination autocomplete
async function fetchAllCountries() {
  try {
    const res = await fetch('https://restcountries.com/v3.1/all');
    if (!res.ok) throw new Error('Failed to fetch countries');
    const data = await res.json();
    // The API returns an array of country objects. Extract country names:
    return data.map(c => c.name.common).sort();
  } catch (err) {
    // Fallback: minimal country list
    return [
      "United States", "Canada", "Mexico", "United Kingdom", "France", "Germany", "Italy", "Spain", "Australia", "Japan"
    ];
  }
}

// MyTrips component: displays a list of planned trips and allows basic management
export default function MyTrips({ trips = [], onSelectTrip, onDeleteTrip } = {}) {
    const container = document.createElement('div');
    container.className = 'my-trips-container';

    // Responsive styles (inject only once)
    if (!document.getElementById('mytrips-responsive-css')) {
        const style = document.createElement('style');
        style.id = 'mytrips-responsive-css';
        style.textContent = `
        .my-trips-container {
            max-width: 900px;
            margin: 2rem auto;
            padding: 1.5rem;
            background: #fff;
            border-radius: 12px;
            box-shadow: 0 2px 16px rgba(0,0,0,0.07);
        }
        .add-trip-form, .trips-list, .trip-summary {
            width: 100%;
        }
        .add-trip-form {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            margin-bottom: 2rem;
            background: #f7f9fa;
            padding: 1rem;
            border-radius: 8px;
        }
        .add-trip-form input,
        .add-trip-form textarea {
            flex: 1 1 180px;
            min-width: 120px;
            padding: 0.5rem;
            border: 1px solid #cfd8dc;
            border-radius: 6px;
            font-size: 1rem;
        }
        .add-trip-form button {
            flex: 1 1 100px;
            min-width: 100px;
            background: #1976d2;
            color: #fff;
            border: none;
            border-radius: 6px;
            padding: 0.75rem;
            font-size: 1rem;
            cursor: pointer;
            transition: background 0.2s;
        }
        .add-trip-form button:hover {
            background: #1565c0;
        }
        .trip-summary {
            display: flex;
            flex-wrap: wrap;
            gap: 2rem;
            margin-bottom: 2rem;
            justify-content: space-between;
        }
        .trip-summary-card {
            flex: 1 1 200px;
            background: #f5f7fa;
            border-radius: 8px;
            padding: 1rem 1.5rem;
            box-shadow: 0 1px 6px rgba(66,133,244,0.06);
            min-width: 180px;
            text-align: center;
        }
        .trips-list {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        .trip-item {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
            background: #f9fafb;
            border-radius: 8px;
            margin-bottom: 1rem;
            padding: 1rem;
            box-shadow: 0 1px 4px rgba(66,133,244,0.04);
        }
        .trip-info {
            flex: 2 1 250px;
            min-width: 180px;
        }
        .trip-info h3 {
            margin: 0 0 0.5rem 0;
            font-size: 1.2rem;
            color: #1976d2;
        }
        .trip-budget, .trip-weather {
            margin-top: 0.25rem;
            font-size: 0.98rem;
            color: #333;
        }
        .trip-actions {
            display: flex;
            gap: 0.5rem;
            flex: 1 1 120px;
            justify-content: flex-end;
        }
        .trip-actions button {
            background: #e3eafc;
            border: none;
            border-radius: 6px;
            padding: 0.5rem 0.7rem;
            font-size: 1rem;
            cursor: pointer;
            transition: background 0.2s;
        }
        .trip-actions button:hover {
            background: #bbdefb;
        }
        .empty-trips {
            text-align: center;
            color: #888;
            padding: 2rem 0;
            font-size: 1.1rem;
        }
        .empty-trips i {
            font-size: 2rem;
            margin-bottom: 0.5rem;
            display: block;
        }
        .trip-modal {
            position: fixed;
            top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(0,0,0,0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
        }
        .trip-modal[style*="display: none"] {
            display: none !important;
        }
        .modal-content {
            background: #fff;
            border-radius: 10px;
            padding: 2rem 1.5rem;
            min-width: 280px;
            max-width: 95vw;
            box-shadow: 0 2px 16px rgba(0,0,0,0.13);
            position: relative;
        }
        .modal-content h2 {
            margin-top: 0;
        }
        .close-modal, .close-edit-modal {
            position: absolute;
            top: 1rem;
            right: 1.2rem;
            font-size: 1.5rem;
            color: #888;
            cursor: pointer;
        }
        .edit-trip-form {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
        }
        .edit-trip-form input,
        .edit-trip-form textarea {
            padding: 0.5rem;
            border: 1px solid #cfd8dc;
            border-radius: 6px;
            font-size: 1rem;
        }
        .edit-trip-form button {
            background: #1976d2;
            color: #fff;
            border: none;
            border-radius: 6px;
            padding: 0.75rem;
            font-size: 1rem;
            cursor: pointer;
            transition: background 0.2s;
        }
        .edit-trip-form button:hover {
            background: #1565c0;
        }
        @media (max-width: 900px) {
            .my-trips-container {
                padding: 1rem;
            }
            .trip-summary {
                gap: 1rem;
            }
        }
        @media (max-width: 700px) {
            .trip-summary {
                flex-direction: column;
                gap: 1rem;
            }
            .trip-item {
                flex-direction: column;
                align-items: flex-start;
                gap: 0.5rem;
            }
            .trip-actions {
                width: 100%;
                justify-content: flex-start;
            }
        }
        @media (max-width: 500px) {
            .my-trips-container {
                padding: 0.5rem;
            }
            .trip-summary-card {
                padding: 0.75rem;
            }
            .modal-content {
                padding: 1rem 0.5rem;
            }
        }
        `;
        document.head.appendChild(style);
    }

    const title = document.createElement('h2');
    title.textContent = 'My Trips';
    container.appendChild(title);

    // --- Trip Summary Section ---
    const summary = document.createElement('div');
    summary.className = 'trip-summary';
    container.appendChild(summary);

    // Add Trip Form
    const form = document.createElement('form');
    form.className = 'add-trip-form';
    form.innerHTML = `
        <input type="text" name="name" placeholder="Destination" required />
        <input type="date" name="startDate" required />
        <input type="date" name="endDate" required />
        <input type="number" name="budget" placeholder="Budget ($)" min="0" />
        <textarea name="notes" placeholder="Notes"></textarea>
        <button type="submit"><i class="fas fa-plus"></i> Add Trip</button>
    `;
    container.appendChild(form);

    const destinationInput = form.querySelector('input[name="name"]');
    const autocompleteList = document.createElement('ul');
    autocompleteList.className = 'destination-autocomplete-list';
    autocompleteList.style.display = 'none';
    autocompleteList.style.position = 'absolute';
    autocompleteList.style.zIndex = '10';
    autocompleteList.style.background = '#fff';
    autocompleteList.style.border = '1px solid #cfd8dc';
    autocompleteList.style.borderRadius = '6px';
    autocompleteList.style.maxHeight = '180px';
    autocompleteList.style.overflowY = 'auto';
    autocompleteList.style.marginTop = '2.2rem';
    autocompleteList.style.width = '100%';
    autocompleteList.style.boxShadow = '0 2px 8px rgba(66,133,244,0.07)';
    form.style.position = 'relative';
    form.appendChild(autocompleteList);

    let allCountries = [];
    fetchAllCountries().then(countries => { allCountries = countries; });

    // Show all countries on focus if input is empty
    destinationInput.addEventListener('focus', () => {
        if (!destinationInput.value.trim()) {
            showCountrySuggestions(allCountries);
        }
    });

    // Filter countries as user types
    destinationInput.addEventListener('input', () => {
        const val = destinationInput.value.trim().toLowerCase();
        if (!val) {
            showCountrySuggestions(allCountries);
            return;
        }
        const matches = allCountries.filter(c => c.toLowerCase().startsWith(val)).slice(0, 8);
        showCountrySuggestions(matches);
    });

    // Hide suggestions when clicking outside
    document.addEventListener('click', (e) => {
        if (!form.contains(e.target)) {
            autocompleteList.style.display = 'none';
        }
    });

    // Helper to show suggestions
    function showCountrySuggestions(countries) {
        autocompleteList.innerHTML = '';
        if (!countries.length) {
            autocompleteList.style.display = 'none';
            return;
        }
        countries.forEach(country => {
            const li = document.createElement('li');
            li.textContent = country;
            li.style.padding = '0.5rem 1rem';
            li.style.cursor = 'pointer';
            li.addEventListener('mousedown', () => {
                destinationInput.value = country;
                autocompleteList.style.display = 'none';
            });
            autocompleteList.appendChild(li);
        });
        autocompleteList.style.display = 'block';
    }

    // Trip List Container
    const listContainer = document.createElement('div');
    container.appendChild(listContainer);

    // Trip Details Modal
    const modal = document.createElement('div');
    modal.className = 'trip-modal';
    modal.style.display = 'none';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <div class="modal-body"></div>
        </div>
    `;
    document.body.appendChild(modal);

    modal.querySelector('.close-modal').onclick = () => {
        modal.style.display = 'none';
    };

    // Edit Trip Modal
    const editModal = document.createElement('div');
    editModal.className = 'trip-modal';
    editModal.style.display = 'none';
    editModal.innerHTML = `
        <div class="modal-content">
            <span class="close-edit-modal">&times;</span>
            <div class="edit-modal-body"></div>
        </div>
    `;
    document.body.appendChild(editModal);

    editModal.querySelector('.close-edit-modal').onclick = () => {
        editModal.style.display = 'none';
    };

    // --- Helper: Calculate summary stats ---
    function getSummaryStats(tripList) {
        const totalTrips = tripList.length;
        const totalBudget = tripList.reduce((sum, t) => sum + (parseFloat(t.budget) || 0), 0);
        const upcoming = tripList.filter(t => new Date(t.startDate) > new Date()).length;
        return { totalTrips, totalBudget, upcoming };
    }

    // --- Helper: Render summary cards ---
    function renderSummary(tripList) {
        summary.innerHTML = '';
        const { totalTrips, totalBudget, upcoming } = getSummaryStats(tripList);
        summary.innerHTML = `
            <div class="trip-summary-card">
                <div><i class="fas fa-suitcase-rolling"></i></div>
                <div><strong>${totalTrips}</strong></div>
                <div>Total Trips</div>
            </div>
            <div class="trip-summary-card">
                <div><i class="fas fa-calendar-alt"></i></div>
                <div><strong>${upcoming}</strong></div>
                <div>Upcoming</div>
            </div>
            <div class="trip-summary-card">
                <div><i class="fas fa-dollar-sign"></i></div>
                <div><strong>$${totalBudget.toLocaleString()}</strong></div>
                <div>Total Budget</div>
            </div>
        `;
    }

    // --- Helper: Export trips as JSON ---
    function exportTrips(tripList) {
        const blob = new Blob([JSON.stringify(tripList, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'my_trips.json';
        a.click();
        URL.revokeObjectURL(url);
    }

    // --- Helper: Import trips from JSON ---
    function importTrips(callback) {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.json,application/json';
        input.onchange = async (e) => {
            const file = e.target.files[0];
            if (!file) return;
            const text = await file.text();
            try {
                const imported = JSON.parse(text);
                if (Array.isArray(imported)) {
                    let tripList = await fetchTrips();
                    tripList = tripList.concat(imported);
                    await saveTrips(tripList);
                    callback();
                }
            } catch {
                alert('Invalid file format.');
            }
        };
        input.click();
    }

    // --- Add Export/Import Buttons ---
    const actions = document.createElement('div');
    actions.className = 'trips-actions-bar';
    actions.innerHTML = `
        <button class="export-trips-btn"><i class="fas fa-file-export"></i> Export Trips</button>
        <button class="import-trips-btn"><i class="fas fa-file-import"></i> Import Trips</button>
    `;
    container.insertBefore(actions, form);

    actions.querySelector('.export-trips-btn').onclick = async () => {
        const tripList = await fetchTrips();
        exportTrips(tripList);
    };
    actions.querySelector('.import-trips-btn').onclick = () => {
        importTrips(renderTrips);
    };

    // Responsive CSS with animation for Export/Import section
    if (!document.getElementById('trips-actions-bar-css')) {
        const style = document.createElement('style');
        style.id = 'trips-actions-bar-css';
        style.textContent = `
        .trips-actions-bar {
            display: flex;
            gap: 1rem;
            margin-bottom: 1.5rem;
            justify-content: flex-end;
            flex-wrap: wrap;
            animation: fadeIn 0.7s;
        }
        .trips-actions-bar button {
            background: #1976d2;
            color: #fff;
            border: none;
            border-radius: 6px;
            padding: 0.7rem 1.2rem;
            font-size: 1rem;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            box-shadow: 0 2px 8px rgba(66,133,244,0.07);
            transition: background 0.2s, transform 0.2s;
            animation: popIn 0.6s;
        }
        .trips-actions-bar button:hover {
            background: #1565c0;
            transform: translateY(-2px) scale(1.04);
        }
        @media (max-width: 600px) {
            .trips-actions-bar {
                flex-direction: column;
                align-items: stretch;
                gap: 0.7rem;
            }
            .trips-actions-bar button {
                width: 100%;
                justify-content: center;
            }
        }
        @keyframes fadeIn {
            from { opacity: 0;}
            to { opacity: 1;}
        }
        @keyframes popIn {
            from { opacity: 0; transform: scale(0.9);}
            to { opacity: 1; transform: scale(1);}
        }
        `;
        document.head.appendChild(style);
    }

    // Render trips dynamically
    async function renderTrips() {
        listContainer.innerHTML = '';
        let tripList = await fetchTrips();
        renderSummary(tripList); // update summary
        if (!tripList.length) {
            const empty = document.createElement('div');
            empty.className = 'empty-trips';
            empty.innerHTML = `<i class="fas fa-suitcase-rolling"></i><p>No trips planned yet.</p>`;
            listContainer.appendChild(empty);
            return;
        }
        const list = document.createElement('ul');
        list.className = 'trips-list';

        tripList.forEach((trip, idx) => {
            const item = document.createElement('li');
            item.className = 'trip-item';

            // Use a context-aware trip image
            const tripImg = `<img src="${getTripImage(trip.name)}" 
                alt="Trip" style="width:56px;height:56px;border-radius:8px;margin-right:1.2em;object-fit:cover;background:#e3eafc;">`;

            item.innerHTML = `
                ${tripImg}
                <div class="trip-info">
                    <h3>${trip.name}</h3>
                    <span>${trip.startDate || ''} to ${trip.endDate || ''}</span>
                    ${trip.budget ? `<div class="trip-budget">Budget: $${trip.budget}</div>` : ''}
                    ${trip.weather ? `<div class="trip-weather">Weather: ${trip.weather}</div>` : ''}
                </div>
                <div class="trip-actions">
                    <button class="select-trip" title="View"><i class="fas fa-eye"></i></button>
                    <button class="edit-trip" title="Edit"><i class="fas fa-edit"></i></button>
                    <button class="delete-trip" title="Delete"><i class="fas fa-trash"></i></button>
                    <button class="fetch-weather" title="Update Weather"><i class="fas fa-cloud-sun"></i></button>
                </div>
            `;

            // View trip details
            item.querySelector('.select-trip').addEventListener('click', () => {
                if (onSelectTrip) onSelectTrip(trip);
                showTripDetails(trip);
            });

            // Edit trip
            item.querySelector('.edit-trip').addEventListener('click', () => {
                showEditTripModal(trip, idx);
            });

            // Delete trip
            item.querySelector('.delete-trip').addEventListener('click', async () => {
                if (onDeleteTrip) onDeleteTrip(trip);
                tripList.splice(idx, 1);
                await saveTrips(tripList);
                renderTrips();
            });

            // Fetch weather
            item.querySelector('.fetch-weather').addEventListener('click', async () => {
                const weather = await fetchWeather(trip.name);
                trip.weather = weather;
                await saveTrips(tripList);
                renderTrips();
            });

            list.appendChild(item);
        });

        listContainer.appendChild(list);
    }

    // Add trip handler
    form.onsubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const newTrip = {
            name: formData.get('name'),
            startDate: formData.get('startDate'),
            endDate: formData.get('endDate'),
            budget: formData.get('budget'),
            notes: formData.get('notes')
        };
        let tripList = await fetchTrips();
        tripList.push(newTrip);
        await saveTrips(tripList);
        form.reset();
        renderTrips();
    };

    // Show trip details modal
    function showTripDetails(trip) {
        modal.querySelector('.modal-body').innerHTML = `
            <h2>${trip.name}</h2>
            <p><strong>Dates:</strong> ${trip.startDate} to ${trip.endDate}</p>
            ${trip.activities ? `<p><strong>Activities:</strong> ${trip.activities.join(', ')}</p>` : ''}
            ${trip.budget ? `<p><strong>Budget:</strong> $${trip.budget}</p>` : ''}
            ${trip.weather ? `<p><strong>Weather:</strong> ${trip.weather}</p>` : ''}
            ${trip.notes ? `<p><strong>Notes:</strong> ${trip.notes}</p>` : ''}
            ${trip.accommodation ? `<p><strong>Accommodation:</strong> ${trip.accommodation}</p>` : ''}
        `;
        modal.style.display = 'block';
    }

    // Show edit trip modal
    function showEditTripModal(trip, idx) {
        editModal.querySelector('.edit-modal-body').innerHTML = `
            <h2>Edit Trip</h2>
            <form class="edit-trip-form">
                <input type="text" name="name" value="${trip.name}" required />
                <input type="date" name="startDate" value="${trip.startDate}" required />
                <input type="date" name="endDate" value="${trip.endDate}" required />
                <input type="number" name="budget" value="${trip.budget || ''}" placeholder="Budget ($)" min="0" />
                <textarea name="notes" placeholder="Notes">${trip.notes || ''}</textarea>
                <button type="submit"><i class="fas fa-save"></i> Save</button>
            </form>
        `;
        editModal.style.display = 'block';

        const editForm = editModal.querySelector('.edit-trip-form');
        editForm.onsubmit = async (e) => {
            e.preventDefault();
            const formData = new FormData(editForm);
            const updatedTrip = {
                ...trip,
                name: formData.get('name'),
                startDate: formData.get('startDate'),
                endDate: formData.get('endDate'),
                budget: formData.get('budget'),
                notes: formData.get('notes')
            };
            let tripList = await fetchTrips();
            tripList[idx] = updatedTrip;
            await saveTrips(tripList);
            editModal.style.display = 'none';
            renderTrips();
        };
    }

    // Add a banner image at the top of the My Trips page
    const banner = document.createElement('img');
    banner.src = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80';
    banner.alt = 'Trips Banner';
    banner.style = 'width:100%;max-height:180px;object-fit:cover;border-radius:10px;margin-bottom:1.2rem;';
    container.insertBefore(banner, container.firstChild);

    // Initial render
    renderTrips();

    return container;
}

// Use a different image for each trip based on destination keywords
function getTripImage(tripName = '') {
    const name = tripName.toLowerCase();
    if (name.includes('beach')) {
        return 'https://img.icons8.com/color/96/000000/beach--v2.png';
    }
    if (name.includes('mountain')) {
        return 'https://img.icons8.com/color/96/000000/mountain.png';
    }
    if (name.includes('city')) {
        return 'https://img.icons8.com/color/96/000000/city.png';
    }
    if (name.includes('desert')) {
        return 'https://img.icons8.com/color/96/000000/desert.png';
    }
    if (name.includes('forest')) {
        return 'https://img.icons8.com/color/96/000000/forest.png';
    }
    if (name.includes('island')) {
        return 'https://img.icons8.com/color/96/000000/island-on-water.png';
    }
    // Default trip image
    return 'https://img.icons8.com/color/96/000000/travel.png';
}