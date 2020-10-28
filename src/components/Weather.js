import React from 'react'
//import { useDispatch, useSelector } from 'react-redux'
import { Card } from 'react-bootstrap'

//import { store } from '../store/store'

const Weather = (props) => {

   /*const { weather, isError } = useSelector((store) => ({
      weather: store.weather.weatherData,
      isError: store.weather.isError
    }));
    const dispatch = useDispatch();*/

    return (
        <div>
            {
                props.error &&
                <div className="my-2 alert alert-danger">
                    <p>{props.error}</p>
                </div>
            }
            {props.main.temp ?
                <Card.Body className="card mt-2 animated fadeInUp" >
                    {
                        props.city &&
                        <p><i className="fas fa-location-arrow"></i> Location: {props.city}, {props.country}</p>
                    }
                    {
                        props.main.temp &&
                        <p><i className="fas fa-temperature-low"></i> Temperature: {props.main.temp_min} {'/'} {props.mais.temp.max} ℃</p>
                    }
                    {
                        props.humidity &&
                        <p><i className="fas fa-water"></i> Humidity: {props.humidity} %</p>
                    }
                    {
                        props.wind_speed &&
                        <p><i className="fas fa-wind"></i> Wind Speed: {props.wind_speed}</p>
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
