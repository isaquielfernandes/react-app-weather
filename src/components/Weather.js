import React from "react";
import { useSelector } from "react-redux";
import { Card, Alert, Badge, Col } from "react-bootstrap";

const Weather = () => {
  const { weather, error } = useSelector((state) => state.forecast);

  return (
    <Col className="col-md-6 mx-auto">
      {error && (
        <Alert variant="warning" className="my-2">
          <p>{ error }</p>
        </Alert>
      )}
      {weather.temp ? (
        <Card.Body className="card mt-2 animated fadeInUp">
          {weather.dt && (
            <p className="m-1">
              <i className="far fa-calendar-alt"></i> Day:{" "}
              <strong>{weather.dt}</strong>{" "}
            </p>
          )}
          {weather.temp && (
            <p style={{ fontSize: "56px"}} className="mt-1 mb-0 pb-0">
              {weather.temp}℃
            </p>
          )}
          {weather.city && (
            <p style={{ fontSize: "40px"}} className="m-0 pt-0 font-weight-light">
              {weather.city}, {weather.country}
            </p>
          )}
          {weather.humidity && (
            <p className="my-1">
              <i className="fas fa-water"></i> Humidity: {weather.humidity} %
            </p>
          )}
          {weather.visibility && (
            <p className="m-1">
              <i className="fas fa-eye-slash"></i> Visibility:{" "}
              {weather.visibility} metre
            </p>
          )}
          {weather.wind_speed && (
            <p className="m-1">
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
              <img src={weather.icon} alt="" width={56} height={56} />
              <span>{weather.description}</span>
            </div>
          )}
        </Card.Body>
      ) : (
       null
      )}
    </Col>
  );
};

export default Weather;
