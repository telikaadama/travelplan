// Capitalize the first letter of a string
export function capitalize(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Format a date as YYYY-MM-DD
export function formatDate(date) {
    if (!date) return '';
    const d = new Date(date);
    return d.toISOString().split('T')[0];
}

// Generate a random ID
export function generateId(prefix = 'id') {
    return `${prefix}_${Math.random().toString(36).substr(2, 9)}`;
}

// Clamp a number between min and max
export function clamp(num, min, max) {
    return Math.min(Math.max(num, min), max);
}