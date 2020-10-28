const baseUrl = 'https://api.openweathermap.org/data/2.5';


export const fetchWeatherData = (city) => {
  let url = `${baseUrl}/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`;

  return fetch(url);
};

export const fetchWeatherOneCallData = (lat, lon) => {
  let url = `${baseUrl}/onecall?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`;

  return fetch(url);
};

export const fetchExtendedForecastData = (city) => {
  let url = `${baseUrl}/forecast/daily?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`;

  return fetch(url);
};
