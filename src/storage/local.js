// Utility functions for localStorage operations

/**
 * Save a value to localStorage under the specified key.
 * @param {string} key
 * @param {any} value
 */
export function saveToLocalStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error('Error saving to localStorage:', e);
  }
}

/**
 * Retrieve a value from localStorage by key.
 * @param {string} key
 * @returns {any|null}
 */
export function getFromLocalStorage(key) {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (e) {
    console.error('Error reading from localStorage:', e);
    return null;
  }
}

/**
 * Remove a value from localStorage by key.
 * @param {string} key
 */
export function removeFromLocalStorage(key) {
  try {
    localStorage.removeItem(key);
  } catch (e) {
    console.error('Error removing from localStorage:', e);
  }
}

/**
 * Clear all localStorage data.
 */
export function clearLocalStorage() {
  try {
    localStorage.clear();
  } catch (e) {
    console.error('Error clearing localStorage:', e);
  }
}

// Example usage for the page (for demo/testing):
// Save a sample itinerary array
const itinerariesArray = [
  { id: 1, destination: 'Paris', date: '2025-06-10' },
  { id: 2, destination: 'Tokyo', date: '2025-07-15' }
];
saveToLocalStorage('itineraries', itinerariesArray);

// Display saved itineraries on the page (for demo)
function showSavedItineraries() {
  const saved = getFromLocalStorage('itineraries');
  let container = document.getElementById('saved-itineraries');
  if (!container) {
    container = document.createElement('div');
    container.id = 'saved-itineraries';
    document.body.appendChild(container);
  }
  container.innerHTML = `<h3>Saved Itineraries</h3>
    <pre>${JSON.stringify(saved, null, 2)}</pre>`;
}

// Call this function on page load for demo
if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', showSavedItineraries);
}