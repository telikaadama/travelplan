export async function fetchWeather(city) {
  const apiKey = 'YOUR_OPENWEATHERMAP_KEY';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  const res = await fetch(url);
  return res.json();
}

export async function fetchEvents(city) {
  const token = 'YOUR_EVENTBRITE_TOKEN';
  const url = `https://www.eventbriteapi.com/v3/events/search/?location.address=${city}&token=${token}`;
  const res = await fetch(url);
  return res.json();
}