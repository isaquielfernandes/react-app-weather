import {
  fetchExtendedForecastData,
  fetchWeatherData,
} from "../../api/useFetchWeather";
import { getNextSevenDays } from "../../utils/dateUtils";

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

    Promise.all([fetchWeatherData(city), fetchExtendedForecastData(city)])
      .then((res) => {
        return Promise.all([res[0].json(), res[1].json()]);
      })
      .then((res) => {
        const { forecast, weather } = transformWeatherData(res);
        dispatch(fetchWeatherSuccess(weather, forecast));
        dispatch(setIsInitialState(false));
        dispatch(setIsLoading(false));
      })
      .catch((err) => {
        dispatch(fetchWeatherFail(err));
        dispatch(setIsLoading(false));
      });
  };
};

const transformWeatherData = (res) => {
  const weather = res[0];
  const forecasts = [];

  weather.weather = res[0].weather[0];
  weather.main = {
    ...weather.main,
    temp: weather.main.temp,
    feels_like: weather.main.feels_like,
    temp_max: weather.main.temp_max,
    temp_min: weather.main.temp_min,
  };
  weather.wind.speed = Math.round(weather.wind.speed * 3.6);

  const next7Days = getNextSevenDays();

  res[1].list.forEach((forecast, index) => {
    forecasts.push({
      day: next7Days[index],
      temp: {
        temp_max: forecast.temp.max,
        temp_min: forecast.temp.min,
      },
      weather: {
        id: forecast.weather[0].id,
        main: forecast.weather[0].main,
      },
    });
  });

  return {
    weather,
    forecasts,
  };
};
