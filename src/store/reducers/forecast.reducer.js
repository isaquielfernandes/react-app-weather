const initialState = {
  weather: {},
  forecast: {
    current: {},
    daily: [],
    hourly: []
  },
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "FETCH_WEATHER_START":
      return state;
    case "FETCH_WEATHER_SUCCESS":
      return {
        ...state,
        weather: action.payload.weather,
        forecast: action.payload.forecast,
        error: null,
      };
    case "FETCH_WEATHER_ERROR":
      return {
        ...state,
        error: 'Location invalid!',
      };
    default:
      return state;
  }
}
