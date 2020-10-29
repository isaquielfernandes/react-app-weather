import {
  fetchWeatherData,
  fetchWeatherOneCallData
} from "../../api/useFetchWeather";
import { unixTimeToDate } from "../../utils/dateUtils";

export const fetchWeatherStart = () => ({
  type: "FETCH_WEATHER_START",
});

export const fetchWeatherSuccess = (weather, forecast) => ({
  type: "FETCH_WEATHER_SUCCESS",
  payload: {
    weather,
    forecast,
  },
});

export const fetchWeatherFail = (error) => ({
  type: "FETCH_WEATHER_ERROR",
  payload: error,
});

export const setIsLoading = (loading) => ({
  type: "SET_IS_LOADING",
  payload: loading,
});

export const setIsInitialState = (state) => ({
  type: "SET_IS_INITIAL",
  payload: state,
});

export const fetchWeatherFromApi = (city) => {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    dispatch(fetchWeatherStart());

    Promise.all([fetchWeatherData(city)])
      .then((res) => {
        return Promise.all([res[0].json()]);
      })
      .then(async (res) => {
        const  { weather }  = transformWeatherData(res);
        const request = await fetchWeatherOneCallData(weather.lat, weather.lon);
        const data = await request.json();
        
        const forecast = {
          current: data.current,
          daily: [...data.daily],
          hourly: [...data.hourly]
        }

        dispatch(fetchWeatherSuccess(weather, forecast));
        dispatch(setIsInitialState(false));
        dispatch(setIsLoading(false));
      })
      .catch((err) => {
        dispatch(fetchWeatherFail(err));
        dispatch(setIsLoading(false));
      }
    );
  };
};

const transformWeatherData = (res) => {
  const weather = {
    dt: unixTimeToDate(res[0].dt),
    temp: res[0].main.temp,
    feels_like: res[0].main.feels_like,
    humidity: res[0].main.humidity,
    sunrise: res[0].sys.sunrise,
    sunset: res[0].sys.sunset,
    country: res[0].sys.country,
    temp_min: res[0].main.temp_min,
    temp_max: res[0].main.temp_max,
    main: res[0].weather[0].main,
    icon: "http://openweathermap.org/img/w/" + res[0].weather[0].icon + ".png",
    description: res[0].weather[0].description,
    visibility: res[0].visibility,
    wind_speed: res[0].wind.speed,
    city: res[0].name,
    lat: res[0].coord.lat,
    lon: res[0].coord.lon,
    error: null,
  };

  return {  weather };
};
