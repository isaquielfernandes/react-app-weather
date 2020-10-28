import React, { useState } from "react";
//import { useSelector, useDispatch} from 'react-redux'
import "./App.css";
import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import WeatherForm from "./components/WeatherForm";
import Weather from "./components/Weather";
import { fetchWeatherData, fetchWeatherOneCallData } from './api/useFetchWeather';


const App = () => {

  const [weather, setWeather] = useState({
    temp: "",
    feels_like: 0,
    temp_min: 0,
    temp_max: 0,
    main: "",
    description: "",
    icon: "",
    humidity: "",
    wind_speed: 0,
    city: "",
    country: "",
    error: null,
  });


  const getWeather = async (e) => {
    e.preventDefault();
    const { city } = e.target.elements;
    const cityValue = city.value;

    if (cityValue) {
      // metric parameter is for Celcius Unit
      const response = await fetchWeatherData(cityValue);
      const data = await response.json();

      console.log(data.coord.lat);

      const res = await fetchWeatherOneCallData(data.coord.lat, data.coord.lon);
      const result= await res.json();
      console.log(result);

      setWeather({
        temp: data.main.temp,
        feels_like: data.main.feels_like,
        temp_min: data.main.temp_min,
        temp_max: data.main.temp_max,
        main: data.weather[0].main,
        icon: "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png",
        description: data.weather[0].description,
        humidity: data.main.humidity,
        wind_speed: data.wind.speed,
        city: data.name,
        country: data.sys.country,
        error: null,
      });
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
        </div>
      </Container>
    </>
  );
};

export default App;
