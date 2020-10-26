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

/*export const fetchWeatherFromApi = (city) => {
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
*/
