import React from "react";
import { useSelector } from "react-redux";
import { Card, Alert, Badge } from "react-bootstrap";

const Weather = () => {
  const { weather } = useSelector((state) => state.forecast);

  return (
    <>
      {weather.error && (
        <Alert variant="danger" dismissible className="my-2">
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>Please enter a City</p>
        </Alert>
      )}
      {weather.temp ? (
        <Card.Body className="card mt-2 animated fadeInUp">
          {weather.dt && (
            <p>
              <i className="far fa-calendar-alt"></i> Day:{" "}
              <strong>{weather.dt}</strong>{" "}
            </p>
          )}
          {weather.city && (
            <p>
              <i className="fas fa-map-marked-alt"></i> Location: {weather.city}
              , {weather.country}
            </p>
          )}
          {weather.temp && (
            <p>
              <i className="fas fa-temperature-low"></i> Temperature:{" "}
              {weather.temp} ℃
            </p>
          )}
          {weather.humidity && (
            <p>
              <i className="fas fa-water"></i> Humidity: {weather.humidity} %
            </p>
          )}
          {weather.visibility && (
            <p>
              <i className="fas fa-eye-slash"></i> Visibility:{" "}
              {weather.visibility}
            </p>
          )}
          {weather.wind_speed && (
            <p>
              <i className="fas fa-wind"></i> Wind Speed: {weather.wind_speed}{" "}
              metre/sec
            </p>
          )}
          {weather.feels_like && (
            <Badge variant="warning"> Feels Like: {weather.feels_like} ℃</Badge>
          )}
          {weather.icon && (
            <div>
              <hr className="m-0" />
              <img src={weather.icon} alt="" width={48} height={48} />
              <span>{weather.description}</span>
            </div>
          )}
        </Card.Body>
      ) : (
        <Card.Body className="card mt-2 text-center">
          <i className="fas fa-smog fa-5x"></i>
        </Card.Body>
      )}
    </>
  );
};

export default Weather;
