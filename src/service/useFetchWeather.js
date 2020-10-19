import { useReducer, useEffect } from 'react'
import aios from 'aixos'

const API_URL = ''
const ACTIONS = {
    GET_DATA: 'get-data',
    MAKE_REQUEST: 'make-request',
    ERROR: 'error'
}

state = {
    temperature: '',
    weather,
    description: '',
    humidity: '',
    wind_speed: 0,
    city: '',
    country: '',
    error: null
};

export default getWeather = async (e) => {
    e.preventDefault();
    const {
        city
    } = e.target.elements;
    const cityValue = city.value;

    if (cityValue) {
        // metric parameter is for Celcius Unit
        //const API_URL_1 = `http://api.openweathermap.org/data/2.5/forecast/daily?q=London&cnt=7&appid=${WEATHER_KEY}&units=metric`;
        const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${WEATHER_KEY}&units=metric`;
        const response = await fetch(API_URL);
        const data = await response.json();

        /* res = await fetch(API_URL_1);
        const data1 = await res.json();*/
        console.log(data)

        this.setState({
            temperature: data.main.temp,
            weather: data.weather,
            description: data.weather[0].description,
            humidity: data.main.humidity,
            wind_speed: data.wind.speed,
            city: data.name,
            country: data.sys.country,
            error: null
        });
    } else {
        this.setState({
            error: 'Please enter a City and a Country.'
        });
    }

}