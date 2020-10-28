import React, { useState } from 'react'
//import { useDispatch, useSelector } from 'react-redux'
import { Card, Alert } from 'react-bootstrap'

//import { store } from '../store/store'

const Weather = ({weather}) => {

   /*const { weather, isError } = useSelector((store) => ({
      weather: store.weather.weatherData,
      isError: store.weather.isError
    }));
    const dispatch = useDispatch();*/
    const [show, setShow] = useState(true);
  
    return (
        <>
            {
                weather.error &&
                <Alert variant="danger" onClose={() => setShow(false)} dismissible className="my-2 py-2">
                    <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                    <p>{weather.error}</p>
                </Alert>
            }
            {weather.temp ?
                <Card.Body className="card mt-2 animated fadeInUp" >
                    {
                        weather.dt &&
                        <p><i className="far fa-calendar-alt"></i> Day: <strong>{weather.dt}</strong> </p>
                    }
                    {
                        weather.city &&
                        <p><i className="fas fa-map-marked-alt"></i> Location: {weather.city}, {weather.country}</p>
                    }
                    {
                        weather.temp &&
                        <p><i className="fas fa-temperature-low"></i> Temperature: {weather.temp} ℃</p>
                    }
                    {
                        weather.humidity &&
                        <p><i className="fas fa-water"></i> Humidity: {weather.humidity} %</p>
                    }
                    {
                        weather.visibility &&
                        <p><i className="fas fa-eye-slash"></i> Visibility: {weather.visibility}</p>
                    }
                    {
                        weather.wind_speed &&
                        <p><i className="fas fa-wind"></i> Wind Speed: {weather.wind_speed}</p>
                    }
                    {
                        weather.temp &&
                        <div>
                            <hr/>
                            <img src={ weather.icon } alt="" width={64} height={64}/>
                            <span>{weather.description}</span>
                        </div>
                    }
                </Card.Body>
                :
                <Card.Body className="card mt-2 text-center">
                    <i className="fas fa-smog fa-5x"></i>
                </Card.Body>
            }
        </>
    );
};

export default Weather;
