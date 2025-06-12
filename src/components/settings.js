import '../styles/settings.css';

/**
 * Renders the Settings panel for Wanderlog Lite.
 * Provides options for customizing application and map appearance, notifications, and language.
 * Settings are persisted in localStorage and applied immediately upon saving.
 */
export default function Settings() {
    const container = document.createElement('div');
    container.className = 'settings-container';
    container.innerHTML = `
        <h2>Application Settings</h2>
        <form class="settings-form">
            <label>
                <span>App Theme:</span>
                <select name="appTheme">
                    <option value="white">White (Default)</option>
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                    <option value="solarized">Solarized</option>
                    <option value="highcontrast">High Contrast</option>
                </select>
            </label>
            <label>
                <span>Map Theme:</span>
                <select name="mapTheme">
                    <option value="default">Default</option>
                    <option value="dark">Dark</option>
                    <option value="satellite">Satellite</option>
                </select>
            </label>
            <label>
                <span>Show Weather Information:</span>
                <input type="checkbox" name="showWeather" />
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

    // Reference form elements
    const form = container.querySelector('.settings-form');
    const appTheme = form.elements.appTheme;
    const mapTheme = form.elements.mapTheme;
    const showWeather = form.elements.showWeather;
    const defaultZoom = form.elements.defaultZoom;
    const notifications = form.elements.notifications;
    const language = form.elements.language;

    // Load settings from localStorage and apply defaults
    const saved = JSON.parse(localStorage.getItem('wanderlogSettings') || '{}');
    appTheme.value = saved.appTheme || 'white';
    mapTheme.value = saved.mapTheme || 'default';
    showWeather.checked = typeof saved.showWeather === 'boolean' ? saved.showWeather : false;
    defaultZoom.value = saved.defaultZoom || 13;
    notifications.checked = typeof saved.notifications === 'boolean' ? saved.notifications : false;
    language.value = saved.language || 'en';

    // Apply themes on load
    applyAppTheme(appTheme.value);
    applyMapTheme(mapTheme.value);

    // Handle form submission
    form.onsubmit = event => {
        event.preventDefault();
        const settings = getSettings();
        // Always default to white theme if not set
        if (!settings.appTheme) settings.appTheme = 'white';
        localStorage.setItem('wanderlogSettings', JSON.stringify(settings));
        applyAppTheme(settings.appTheme);
        applyMapTheme(settings.mapTheme);

        // Optionally update map and other features immediately
        if (window.updateMapTheme) {
            window.updateMapTheme(settings.mapTheme);
        }
        if (window.updateMapZoom) {
            window.updateMapZoom(settings.defaultZoom);
        }
        window.dispatchEvent(new CustomEvent('settingsChanged', { detail: settings }));

        // Professional notification (replace with custom UI as needed)
        alert('Your settings have been saved and applied.');
    };

    /**
     * Retrieves current settings from the form.
     * @returns {Object} Settings object
     */
    function getSettings() {
        return {
            appTheme: appTheme.value,
            mapTheme: mapTheme.value,
            showWeather: showWeather.checked,
            defaultZoom: Number(defaultZoom.value),
            notifications: notifications.checked,
            language: language.value
        };
    }

    /**
     * Applies the selected application theme by updating the body class.
     * @param {string} theme - The selected app theme
     */
    function applyAppTheme(theme) {
        document.body.classList.remove(
            'theme-white',
            'theme-light',
            'theme-dark',
            'theme-solarized',
            'theme-highcontrast'
        );
        document.body.classList.add(`theme-${theme}`);
    }

    /**
     * Applies the selected map theme by updating the body class.
     * @param {string} theme - The selected map theme
     */
    function applyMapTheme(theme) {
        document.body.classList.remove(
            'maptheme-default',
            'maptheme-dark',
            'maptheme-satellite'
        );
        document.body.classList.add(`maptheme-${theme}`);
    }

    return container;
}