import '../styles/settings.css';

export default function Settings() {
    const container = document.createElement('div');
    container.className = 'settings-container';
    container.innerHTML = `
        <h2>Settings</h2>
        <form class="settings-form">
            <label>
                <span>Map Theme:</span>
                <select name="mapTheme">
                    <option value="default">Default</option>
                    <option value="dark">Dark</option>
                    <option value="satellite">Satellite</option>
                </select>
            </label>
            <label>
                <span>Show Weather Info:</span>
                <input type="checkbox" name="showWeather" checked />
            </label>
            <label>
                <span>Default Map Zoom:</span>
                <input type="number" name="defaultZoom" min="1" max="20" value="13" />
            </label>
            <label>
                <span>Enable Notifications:</span>
                <input type="checkbox" name="notifications" />
            </label>
            <label>
                <span>Language:</span>
                <select name="language">
                    <option value="en">English</option>
                    <option value="fr">French</option>
                    <option value="es">Spanish</option>
                </select>
            </label>
            <button type="submit">Save Settings</button>
        </form>
    `;

    // Load settings from localStorage
    const form = container.querySelector('.settings-form');
    const mapTheme = form.elements.mapTheme;
    const showWeather = form.elements.showWeather;
    const defaultZoom = form.elements.defaultZoom;
    const notifications = form.elements.notifications;
    const language = form.elements.language;
    const saved = JSON.parse(localStorage.getItem('wanderlogSettings') || '{}');
    if (saved.mapTheme) mapTheme.value = saved.mapTheme;
    if (typeof saved.showWeather === 'boolean') showWeather.checked = saved.showWeather;
    if (saved.defaultZoom) defaultZoom.value = saved.defaultZoom;
    if (typeof saved.notifications === 'boolean') notifications.checked = saved.notifications;
    if (saved.language) language.value = saved.language;

    // Save settings and apply changes on submit
    form.onsubmit = e => {
        e.preventDefault();
        const settings = getSettings();
        localStorage.setItem('wanderlogSettings', JSON.stringify(settings));
        applyMapTheme(settings.mapTheme);
        // Optionally update map zoom and other features immediately
        if (window.updateMapTheme) {
            window.updateMapTheme(settings.mapTheme);
        }
        if (window.updateMapZoom) {
            window.updateMapZoom(settings.defaultZoom);
        }
        window.dispatchEvent(new CustomEvent('settingsChanged', { detail: settings }));
        alert('Settings saved and applied!');
    };

    // Helper: Get settings from form
    function getSettings() {
        return {
            mapTheme: mapTheme.value,
            showWeather: showWeather.checked,
            defaultZoom: Number(defaultZoom.value),
            notifications: notifications.checked,
            language: language.value
        };
    }

    // Helper: Apply map theme by updating a global variable or class
    function applyMapTheme(theme) {
        document.body.classList.remove('theme-default', 'theme-dark', 'theme-satellite');
        document.body.classList.add(`theme-${theme}`);
    }

    // Apply theme on load
    applyMapTheme(mapTheme.value);

    return container;
}