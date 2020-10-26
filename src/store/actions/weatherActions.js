export const fetchWeatherStart = () => ({
  type: 'FETCH_WEATHER_START',
});

export const fetchWeatherSuccess = (weather, forecast) => ({
  type: 'FETCH_WEATHER_SUCCESS',
  payload: { weather, forecast },
});

export const fetchWeatherFail = (error) => ({
  type: 'FETCH_WEATHER_ERROR',
  payload: error,
});
