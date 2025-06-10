export default function LocalEvents() {
    const section = document.createElement('section');
    section.innerHTML = `
        <h2>Local Events</h2>
        <form id="event-form" style="display:flex;gap:0.5rem;flex-wrap:wrap;margin-bottom:1rem;">
            <input type="text" id="event-name" placeholder="Event name" required maxlength="40" />
            <input type="date" id="event-date" required />
            <button type="submit">Add Event</button>
        </form>
        <div class="events-status">Loading events...</div>
        <ul class="events-list"></ul>
        <button id="clear-events-btn" style="margin-top:1rem;">Clear All</button>
    `;

    // Load from localStorage or use default events
    let events = JSON.parse(localStorage.getItem('localEvents') || 'null');
    if (!events) {
        events = [
            { name: "Concert in the Park", date: "2025-06-01" },
            { name: "Art Workshop", date: "2025-06-02" }
        ];
    }

    function renderEvents() {
        const list = section.querySelector('.events-list');
        list.innerHTML = '';
        if (events.length === 0) {
            section.querySelector('.events-status').textContent = 'No events found.';
        } else {
            section.querySelector('.events-status').textContent = '';
            events.forEach((ev, idx) => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <span class="event-name">${ev.name}</span>
                    <span class="event-date">(${ev.date})</span>
                    <button class="edit-event" title="Edit">&#9998;</button>
                    <button class="delete-event" title="Delete">&times;</button>
                `;
                // Edit event
                li.querySelector('.edit-event').onclick = () => {
                    section.querySelector('#event-name').value = ev.name;
                    section.querySelector('#event-date').value = ev.date;
                    events.splice(idx, 1);
                    saveAndRender();
                };
                // Delete event
                li.querySelector('.delete-event').onclick = () => {
                    events.splice(idx, 1);
                    saveAndRender();
                };
                list.appendChild(li);
            });
        }
    }

    function saveAndRender() {
        localStorage.setItem('localEvents', JSON.stringify(events));
        renderEvents();
    }

    // Add event
    section.querySelector('#event-form').onsubmit = e => {
        e.preventDefault();
        const name = section.querySelector('#event-name');
        const date = section.querySelector('#event-date');
        if (name.value.trim() && date.value) {
            events.push({ name: name.value.trim(), date: date.value });
            name.value = '';
            date.value = '';
            saveAndRender();
        }
    };

    // Clear all events
    section.querySelector('#clear-events-btn').onclick = () => {
        if (confirm('Clear all events?')) {
            events = [];
            saveAndRender();
        }
    };

    // Initial render (simulate loading)
    section.querySelector('.events-status').textContent = 'Loading events...';
    setTimeout(() => {
        renderEvents();
    }, 700);

    return section;
}