const baseUrl = 'https://api.openweathermap.org/data/2.5';

export const fetchWeatherData = (city) => {
  let url = `${baseUrl}/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;

  return fetch(url);
};

export const fetchExtendedForecastData = (city) => {
  let url = `${baseUrl}/forecast/daily?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;

  return fetch(url);
};
