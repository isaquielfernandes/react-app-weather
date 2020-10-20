import React from 'react';
import { Card } from 'react-bootstrap'

const Weather = props => {
    return (
        <div>
            {
                props.error &&
                <div className="my-2 alert alert-danger">
                    <p>{props.error}</p>
                </div>
            }
            {props.temperature ?
                <Card.Body className="card mt-2 animated fadeInUp" >
                    {
                        props.city &&
                        <p><i className="fas fa-location-arrow"></i> Location: {props.city}, {props.country}</p>
                    }
                    {
                        props.temperature &&
                        <p><i className="fas fa-temperature-low"></i> Temperature: {props.temperature} ℃</p>
                    }
                    {
                        props.weather &&
                        <p>{props.weather.map((w) => { return <span>{ w.main } {w.description }, </span>})}</p>
                    }
                    {
                        props.humidity &&
                        <p><i className="fas fa-water"></i> Humidity: {props.humidity}</p>
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
