import React, {Component} from 'react';
import './App.css';
import { Container } from 'react-bootstrap'
import NavBar from "./components/NavBar";
import WeatherForm from './components/WeatherForm';
import Weather from './components/Weather';
import { WEATHER_KEY } from './app/Keys';

//import getWeather  from "./service/useFetchWeather";

class  App extends Component {

    state = {
        temperature: '',
        weather: [],
        description: '',
        humidity: '',
        wind_speed: 0,
        city: '',
        country: '',
        error: null
    };

    getWeather = async (e) => {
        e.preventDefault();
        const { city } = e.target.elements;
        const cityValue = city.value;

        if (cityValue) {
            
            // metric parameter is for Celcius Unit
            //const API_URL_1 = `http://api.openweathermap.org/data/2.5/forecast/daily?q=London&cnt=7&appid=${WEATHER_KEY}&units=metric`;
            const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&cnt=5&appid=${WEATHER_KEY}&units=metric`;
            const response = await fetch(API_URL);
            const data = await response.json();

            this.setState({
                temperature: data.main.temp,
                weather: [...data.weather],
                description: data.weather[0].description,
                humidity: data.main.humidity,
                wind_speed: data.wind.speed,
                city: data.name,
                country: data.sys.country,
                error: null
            });

        } else {
            this.setState({
                error: 'Please enter a City!'
            });
        }

    }

    render() {
        return  <>
            <NavBar/>
                <Container className="p-4">
                    <div className="row">
                        <div className="col-md-4">
                            <WeatherForm
                                getWeather={this.getWeather}
                            />
                            <Weather {...this.state} />
                        </div>
                    </div>
                </Container>
        </>
    }
}

export default App;
