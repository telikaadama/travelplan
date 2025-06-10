// This module handles itinerary-related UI events and updates the page accordingly.

import { saveToLocalStorage, getFromLocalStorage } from '../storage/local.js';

// Helper to render the itinerary list
function renderItineraryList() {
  const list = document.getElementById('itineraryList');
  if (!list) return;
  const itineraries = getFromLocalStorage('itineraries') || [];
  list.innerHTML = itineraries.map(it =>
    `<li data-id="${it.id}">
      <strong>${it.destination}</strong> - ${it.date}
    </li>`
  ).join('');
}

// Add itinerary from form
function addItinerary() {
  const destination = document.getElementById('destinationInput').value;
  const date = document.getElementById('dateInput').value;
  if (!destination || !date) return;
  const itineraries = getFromLocalStorage('itineraries') || [];
  const newItinerary = {
    id: Date.now(),
    destination,
    date
  };
  itineraries.push(newItinerary);
  saveToLocalStorage('itineraries', itineraries);
  renderItineraryList();
  document.getElementById('itineraryForm').reset();
}

// Filter itineraries by search input
function filterItineraries() {
  const search = document.getElementById('searchInput').value.toLowerCase();
  const itineraries = getFromLocalStorage('itineraries') || [];
  const filtered = itineraries.filter(it =>
    it.destination.toLowerCase().includes(search)
  );
  const list = document.getElementById('itineraryList');
  list.innerHTML = filtered.map(it =>
    `<li data-id="${it.id}">
      <strong>${it.destination}</strong> - ${it.date}
    </li>`
  ).join('');
}

// Update budget (demo: just save to localStorage)
function updateBudget() {
  const budget = document.getElementById('budgetInput').value;
  saveToLocalStorage('budget', budget);
}

// Highlight itinerary on mouseover
function highlightItinerary(e) {
  if (e.target.tagName === 'LI') {
    e.target.style.background = '#e3f2fd';
    setTimeout(() => { e.target.style.background = ''; }, 500);
  }
}

// Save itinerary from form submit
function saveItinerary(e) {
  e.preventDefault();
  addItinerary();
}

// Attach event listeners after DOM is loaded
export function setupItineraryEvents() {
  document.getElementById('addItineraryBtn')?.addEventListener('click', addItinerary);
  document.getElementById('searchInput')?.addEventListener('input', filterItineraries);
  document.getElementById('budgetInput')?.addEventListener('change', updateBudget);
  document.getElementById('itineraryList')?.addEventListener('mouseover', highlightItinerary);
  document.getElementById('itineraryForm')?.addEventListener('submit', saveItinerary);
  renderItineraryList();
}

// Optionally auto-setup on DOMContentLoaded
if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', setupItineraryEvents);
}