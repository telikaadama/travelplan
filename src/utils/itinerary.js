// Sort itineraries by start date
export function sortItinerariesByDate(itineraries) {
  return itineraries.slice().sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
}

export function filterItinerariesByDestination(itineraries, destination) {
  return itineraries.filter(itin => itin.destination.toLowerCase().includes(destination.toLowerCase()));
}