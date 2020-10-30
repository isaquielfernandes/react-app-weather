const initialState = {
        temperature: '',
        weather: [],
        description: '',
        humidity: '',
        wind_speed: 0,
        city: '',
        country: '',
        extendedWeatherData: [],
        error: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'FETCH_WEATHER_START':
      return state;
    case 'FETCH_WEATHER_SUCCESS':
      return {
        ...state,
        weatherData: action.payload.weather,
        extendedWeatherData: action.payload.forecast,
      };
    case 'FETCH_WEATHER_ERROR':
      return {
        ...state,
        isError: true,
      };
    default:
      return state;
  }
}
