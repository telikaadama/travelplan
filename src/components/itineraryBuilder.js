import '../styles/itinerary.css';

export default function ItineraryBuilder({ itineraries = [], maxBudget = 1000 } = {}) {
    const wrapper = document.createElement('div');
    wrapper.className = 'itinerary-destination-flex';

    // --- Itinerary Builder Section ---
    const section = document.createElement('section');
    section.className = 'itinerary-builder-section';
    section.innerHTML = `
        <h2>
            <img src="https://img.icons8.com/color/48/itinerary.png" alt="Itinerary Icon" style="vertical-align:middle;width:32px;height:32px;margin-right:0.5rem;">
            Itinerary Builder
        </h2>
        <div class="itinerary-actions">
            <input type="text" id="search-stop" placeholder="Search stops..." />
            <input type="number" id="max-budget-input" min="0" step="0.01" value="${maxBudget}" style="width:120px;" title="Set Max Budget" />
            <span style="font-size:0.95em;color:#1976d2;">Max Budget</span>
            <button id="export-csv-btn" title="Export as CSV">
                <img src="https://img.icons8.com/fluency/24/export-csv.png" alt="Export" style="vertical-align:middle;width:20px;height:20px;">
                Export CSV
            </button>
        </div>
        <form id="itinerary-form" autocomplete="off" style="display:flex;gap:0.5rem;flex-wrap:wrap;">
            <input type="text" placeholder="Add stop" id="itinerary-input" required />
            <input type="date" id="itinerary-date" required />
            <input type="text" placeholder="Notes (optional)" id="itinerary-notes" maxlength="60" />
            <input type="number" placeholder="Budget ($)" id="itinerary-budget" min="0" step="0.01" />
            <button id="itinerary-add-btn" type="submit">
                <img src="https://img.icons8.com/fluency/24/plus-math.png" alt="Add" style="vertical-align:middle;width:20px;height:20px;">
                Add
            </button>
        </form>
        <div id="budget-progress-container">
            <label for="budget-progress">Budget Usage:</label>
            <progress id="budget-progress" value="0" max="${maxBudget}"></progress>
            <span id="budget-progress-label"></span>
        </div>
        <ul id="itinerary-list"></ul>
        <div id="itinerary-summary"></div>
        <button id="itinerary-clear-btn" style="margin-top:1rem;">
            <img src="https://img.icons8.com/color/24/000000/delete-forever.png" alt="Clear" style="vertical-align:middle;width:20px;height:20px;margin-right:0.3rem;">
            Clear All
        </button>
    `;

    // Load from localStorage if available
    let stops = JSON.parse(localStorage.getItem('userItinerary') || '[]');
    let filter = '';
    let currentMaxBudget = maxBudget;

    // Render stops with filter and dynamic calculations
    function renderStops() {
        const ul = section.querySelector('#itinerary-list');
        ul.innerHTML = '';
        let totalBudget = 0;
        let totalDays = 0;
        let earliest = null;
        let latest = null;

        const filteredStops = stops.filter(stop => stop.name.toLowerCase().includes(filter));
        filteredStops.forEach((stop, idx) => {
            const li = document.createElement('li');
            li.className = 'itinerary-item';
            li.innerHTML = `
                <div class="itinerary-destination">
                    <img src="https://img.icons8.com/color/20/marker.png" alt="Stop" style="vertical-align:middle;width:16px;height:16px;margin-right:0.2rem;">
                    ${stop.name}
                </div>
                <div class="itinerary-dates">${stop.date}</div>
                <div class="itinerary-notes">${stop.notes ? '📝 ' + stop.notes : ''}</div>
                <div class="itinerary-budget">${stop.budget ? '💰 $' + Number(stop.budget).toFixed(2) : ''}</div>
                <button class="edit-stop" title="Edit">&#9998;</button>
                <button class="delete-stop" title="Delete">&times;</button>
            `;
            // Edit functionality
            li.querySelector('.edit-stop').onclick = () => {
                section.querySelector('#itinerary-input').value = stop.name;
                section.querySelector('#itinerary-date').value = stop.date;
                section.querySelector('#itinerary-notes').value = stop.notes || '';
                section.querySelector('#itinerary-budget').value = stop.budget || '';
                stops.splice(idx, 1);
                renderStops();
            };
            // Delete functionality
            li.querySelector('.delete-stop').onclick = () => {
                stops.splice(idx, 1);
                saveAndRender();
            };
            ul.appendChild(li);
            totalBudget += Number(stop.budget) || 0;

            // Calculate earliest and latest date for trip duration
            if (stop.date) {
                const d = new Date(stop.date);
                if (!earliest || d < earliest) earliest = d;
                if (!latest || d > latest) latest = d;
            }
        });

        // Calculate total days
        if (earliest && latest) {
            totalDays = Math.floor((latest - earliest) / (1000 * 60 * 60 * 24)) + 1;
        }

        // Summary
        section.querySelector('#itinerary-summary').innerHTML = `
            <strong>Total Stops:</strong> ${filteredStops.length} &nbsp; | &nbsp; 
            <strong>Total Budget:</strong> $${totalBudget.toFixed(2)} &nbsp; | &nbsp;
            <strong>Trip Duration:</strong> ${totalDays > 0 ? totalDays + ' days' : 'N/A'}
        `;

        // Progress bar
        const progress = section.querySelector('#budget-progress');
        const label = section.querySelector('#budget-progress-label');
        progress.value = totalBudget;
        progress.max = currentMaxBudget;
        label.textContent = ` $${totalBudget.toFixed(2)} / $${Number(currentMaxBudget).toFixed(2)}`;
        if (totalBudget > currentMaxBudget) {
            progress.classList.add('over-budget');
            label.style.color = 'red';
        } else {
            progress.classList.remove('over-budget');
            label.style.color = '';
        }
    }

    function saveAndRender() {
        localStorage.setItem('userItinerary', JSON.stringify(stops));
        renderStops();
    }

    // Add stop
    section.querySelector('#itinerary-form').onsubmit = e => {
        e.preventDefault();
        const input = section.querySelector('#itinerary-input');
        const date = section.querySelector('#itinerary-date');
        const notes = section.querySelector('#itinerary-notes');
        const budget = section.querySelector('#itinerary-budget');
        if (input.value.trim() && date.value) {
            stops.push({ 
                name: input.value.trim(), 
                date: date.value, 
                notes: notes.value.trim(), 
                budget: budget.value 
            });
            input.value = '';
            date.value = '';
            notes.value = '';
            budget.value = '';
            saveAndRender();
        }
    };

    // Clear all
    section.querySelector('#itinerary-clear-btn').onclick = () => {
        if (confirm('Clear all itinerary stops?')) {
            stops = [];
            saveAndRender();
        }
    };

    // Search/filter
    section.querySelector('#search-stop').oninput = e => {
        filter = e.target.value.trim().toLowerCase();
        renderStops();
    };

    // Dynamic max budget input
    section.querySelector('#max-budget-input').oninput = e => {
        const val = Number(e.target.value);
        currentMaxBudget = val > 0 ? val : 1;
        section.querySelector('#budget-progress').max = currentMaxBudget;
        renderStops();
    };

    // Export CSV
    section.querySelector('#export-csv-btn').onclick = () => {
        if (!stops.length) return alert('No stops to export!');
        const csv = [
            ['Name', 'Date', 'Notes', 'Budget'],
            ...stops.map(s => [
                `"${s.name.replace(/"/g, '""')}"`,
                s.date,
                `"${(s.notes || '').replace(/"/g, '""')}"`,
                s.budget
            ])
        ].map(row => row.join(',')).join('\n');
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'itinerary.csv';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    // Initial render
    renderStops();

    // Optionally, show sorted itineraries from props below the builder
    if (Array.isArray(itineraries) && itineraries.length) {
        const ul = document.createElement('ul');
        ul.className = 'itinerary-list';
        itineraries.forEach(itin => {
            const li = document.createElement('li');
            li.className = 'itinerary-item';
            li.innerHTML = `
                <div class="itinerary-destination">${itin.destination}</div>
                <div class="itinerary-dates">${itin.startDate} to ${itin.endDate}</div>
                <div class="itinerary-activities">Activities: ${itin.activities?.join(', ') || 'None'}</div>
                <div class="itinerary-budget">Budget: $${itin.budget || 'N/A'}</div>
            `;
            ul.appendChild(li);
        });
        section.appendChild(ul);
    }

    // --- Add a human image at the side ---
    const sideImage = document.createElement('img');
    sideImage.src = 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80';
    sideImage.alt = 'Traveler';
    sideImage.className = 'itinerary-human-image';

    // --- Layout: Adjacent to DestinationSearch ---
    wrapper.appendChild(section);
    wrapper.appendChild(sideImage);

    // --- Responsive CSS (inject only once) ---
    if (!document.getElementById('itinerary-builder-css')) {
        const style = document.createElement('style');
        style.id = 'itinerary-builder-css';
        style.textContent = `
        .itinerary-destination-flex {
            display: flex;
            gap: 2rem;
            align-items: flex-start;
            max-width: 1100px;
            margin: 2rem auto;
            background: linear-gradient(90deg, #e3f2fd 0%, #fff 100%);
            border-radius: 18px;
            box-shadow: 0 4px 24px rgba(66,133,244,0.10);
            padding: 2rem 1rem;
        }
        .itinerary-builder-section {
            flex: 1 1 0%;
            background: #fff;
            border-radius: 16px;
            box-shadow: 0 2px 12px rgba(66,133,244,0.08);
            padding: 2rem 1.5rem;
            min-width: 0;
            transition: box-shadow 0.2s;
        }
        .itinerary-builder-section:hover {
            box-shadow: 0 6px 24px rgba(66,133,244,0.13);
        }
        .itinerary-actions {
            display: flex;
            gap: 1rem;
            margin-bottom: 1rem;
            align-items: center;
        }
        #search-stop {
            flex: 1;
            padding: 0.5rem 1rem;
            border-radius: 8px;
            border: 1px solid #90caf9;
            font-size: 1rem;
            outline: none;
            transition: border 0.2s;
        }
        #search-stop:focus {
            border: 1.5px solid #1976d2;
        }
        #max-budget-input {
            border-radius: 8px;
            border: 1px solid #90caf9;
            padding: 0.5rem 0.8rem;
            font-size: 1rem;
            margin-left: 0.5rem;
            margin-right: 0.2rem;
        }
        #max-budget-input:focus {
            border: 1.5px solid #1976d2;
            outline: none;
        }
        #export-csv-btn {
            background: #1976d2;
            color: #fff;
            border: none;
            border-radius: 8px;
            padding: 0.5rem 1rem;
            font-size: 1rem;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 0.3rem;
            transition: background 0.2s;
        }
        #export-csv-btn:hover {
            background: #1565c0;
        }
        #itinerary-form input, #itinerary-form button {
            border-radius: 8px;
            border: 1px solid #90caf9;
            padding: 0.5rem 0.8rem;
            font-size: 1rem;
            margin-bottom: 0.3rem;
        }
        #itinerary-form input:focus {
            border: 1.5px solid #1976d2;
            outline: none;
        }
        #itinerary-add-btn {
            background: #43a047;
            color: #fff;
            border: none;
            transition: background 0.2s;
        }
        #itinerary-add-btn:hover {
            background: #388e3c;
        }
        #itinerary-clear-btn {
            background: #e53935;
            color: #fff;
            border: none;
            border-radius: 8px;
            padding: 0.5rem 1.2rem;
            font-size: 1rem;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 0.3rem;
            transition: background 0.2s;
        }
        #itinerary-clear-btn:hover {
            background: #b71c1c;
        }
        .itinerary-item {
            display: flex;
            align-items: center;
            gap: 1rem;
            background: #f5fafd;
            border-radius: 8px;
            padding: 0.7rem 1rem;
            margin-bottom: 0.5rem;
            box-shadow: 0 1px 4px rgba(66,133,244,0.04);
        }
        .itinerary-item .edit-stop, .itinerary-item .delete-stop {
            background: none;
            border: none;
            font-size: 1.1rem;
            cursor: pointer;
            color: #1976d2;
            margin-left: 0.2rem;
            transition: color 0.2s;
        }
        .itinerary-item .delete-stop {
            color: #e53935;
        }
        .itinerary-item .edit-stop:hover {
            color: #388e3c;
        }
        .itinerary-item .delete-stop:hover {
            color: #b71c1c;
        }
        #budget-progress-container {
            margin: 1rem 0 1.2rem 0;
            display: flex;
            align-items: center;
            gap: 0.7rem;
        }
        #budget-progress {
            width: 180px;
            height: 18px;
            accent-color: #1976d2;
            border-radius: 8px;
            background: #e3f2fd;
        }
        #budget-progress.over-budget {
            accent-color: #e53935;
        }
        .itinerary-human-image {
            flex: 0 0 220px;
            width: 220px;
            height: 320px;
            object-fit: cover;
            border-radius: 12px;
            box-shadow: 0 2px 12px rgba(66,133,244,0.09);
            margin-bottom: 1rem;
            align-self: flex-start;
        }
        @media (max-width: 900px) {
            .itinerary-destination-flex {
                flex-direction: column;
                align-items: center;
                gap: 1.5rem;
                padding: 1rem 0.5rem;
            }
            .itinerary-human-image {
                width: 90vw;
                max-width: 350px;
                height: 200px;
                margin: 0 auto 1rem auto;
            }
        }
        @media (max-width: 600px) {
            .itinerary-builder-section {
                padding: 1rem;
            }
            .itinerary-human-image {
                width: 100vw;
                max-width: 100%;
                height: 120px;
            }
            .itinerary-destination-flex {
                padding: 0.5rem;
            }
            #budget-progress {
                width: 100px;
            }
        }
        `;
        document.head.appendChild(style);
    }

    return wrapper;
}