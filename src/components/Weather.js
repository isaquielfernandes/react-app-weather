import React from 'react'
//import { useDispatch, useSelector } from 'react-redux'
import { Card } from 'react-bootstrap'

//import { store } from '../store/store'

const Weather = ({weather}) => {

   /*const { weather, isError } = useSelector((store) => ({
      weather: store.weather.weatherData,
      isError: store.weather.isError
    }));
    const dispatch = useDispatch();*/

    return (
        <div>
            {
                weather.error &&
                <div className="my-2 py-2 alert alert-danger">
                    <p>{weather.error}</p>
                </div>
            }
            {weather.temp ?
                <Card.Body className="card mt-2 animated fadeInUp" >
                    {
                        weather.city &&
                        <p><i className="fas fa-map-marked-alt"></i> Location: {weather.city}, {weather.country}</p>
                    }
                    {
                        weather.temp &&
                        <p><i className="fas fa-temperature-low"></i> Temperature: {weather.temp_min} / {weather.temp_max} ℃</p>
                    }
                    {
                        weather.temp &&
                        <div>
                            <img src={ weather.icon } alt="" width={64} height={64}/>
                            <span>{weather.description}</span>
                        </div>
                    }
                    {
                        weather.humidity &&
                        <p><i className="fas fa-water"></i> Humidity: {weather.humidity} %</p>
                    }
                    {
                        weather.wind_speed &&
                        <p><i className="fas fa-wind"></i> Wind Speed: {weather.wind_speed}</p>
                    }
                </Card.Body>
                :
                <Card.Body className="card mt-2 text-center">
                    <i className="fas fa-smog fa-10x"></i>
                </Card.Body>
            }
        </div>
    );
};

export default Weather;
