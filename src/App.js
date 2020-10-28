import React, { useState } from "react";
//import { useSelector, useDispatch} from 'react-redux'
import "./App.css";
import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import WeatherForm from "./components/WeatherForm";
import Weather from "./components/Weather";
import ForecastContainer from './components/forecast/ForecastContainer'
import { fetchWeatherData, fetchWeatherOneCallData } from './api/useFetchWeather';
import { unixTimeToDate } from './utils/dateUtils'


const App = () => {

  const [weather, setWeather] = useState({
    dt: "",
    temp: "",
    feels_like: 0,
    sunrise: 0,
    sunset: 0,
    temp_min: 0,
    temp_max: 0,
    main: "",
    description: "",
    icon: "",
    humidity: "",
    visibility: "",
    wind_speed: 0,
    city: "",
    country: "",
    error: null,
  });

  const [forecast, setForecast] = useState({
    daily: []
  })

  const getWeather = async (e) => {
    e.preventDefault();
    const { city } = e.target.elements;
    const cityValue = city.value;

    if (cityValue) {
      // metric parameter is for Celcius Unit
      const response = await fetchWeatherData(cityValue);
      const data = await response.json();

      const res = await fetchWeatherOneCallData(data.coord.lat, data.coord.lon);
      const result= await res.json();

      setWeather({
        dt: unixTimeToDate(result.current.dt),
        temp: result.current.temp,
        feels_like: result.current.feels_like,
        sunrise: result.current.sunrise,
        sunset: result.current.sunset,
        temp_min: data.main.temp_min,
        temp_max: data.main.temp_max,
        main: data.weather[0].main,
        icon: "http://openweathermap.org/img/w/" + result.current.weather[0].icon + ".png",
        description: result.current.weather[0].description,
        humidity: result.current.humidity,
        visibility: result.current.visibility,
        wind_speed: result.current.wind_speed,
        city: data.name,
        country: data.sys.country,
        error: null,
      });

      setForecast({
        daily: [...result.daily]
      })
    } else {
      setWeather({
        error: "Please enter a City!",
      });
    }
  };
  return (
    <>
      <NavBar />
      <Container className="p-4">
        <div className="row">
          <div className="col-md-4">
            <WeatherForm getWeather={getWeather} />
            <Weather weather={weather} />
          </div>
          <div className="col-md-8">
            <ForecastContainer forecast={forecast}/>
          </div>
        </div>
      </Container>
    </>
  );
};

export default App;
