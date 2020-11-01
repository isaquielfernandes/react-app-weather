const initialState = {
  weather: {},
  forecast: {
    current: {},
    daily: [],
    hourly: []
  },
  isError: null,
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
      };
    case "FETCH_WEATHER_ERROR":
      return {
        ...state,
        isError: action.payload.error,
      };
    default:
      return state;
  }
}
