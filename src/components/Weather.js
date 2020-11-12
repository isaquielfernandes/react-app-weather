import React from "react";
import { useSelector } from "react-redux";
import { Card, Alert, Badge, Col, Row } from "react-bootstrap";

const Weather = () => {
  const { weather, error } = useSelector((state) => state.forecast);

  return (
    <Row >
    <Col className="col-md-6 mx-auto">
      {error && (
        <Alert variant="warning" className="my-2">
          <p>{ error }</p>
        </Alert>
      )}
      {weather.temp ? (
        <Card.Body className="card mt-2 animated fadeInUp">
          {weather.dt && (
            <p className="my-1">
              <i className="far fa-calendar-alt"></i>{" "}
              <strong>{weather.dt}</strong>
            </p>
          )}
          {weather.temp && (
            <p style={{ fontSize: "46px"}} className="mt-1 mb-0 p-0">
              {weather.temp}℃ {' '}  <img src={weather.icon} alt="" width={56} height={56} />
            </p>
          )}
          {weather.city && (
            <p style={{ fontSize: "40px" }} className="my-0 p-0 font-weight-light">
              {weather.city}, {weather.country}
            </p>
          )}
          <div className="border-left border-warning pl-1 mb-1">
          {weather.humidity && (
            <p className="mb-1 mt-0">
              <i className="fas fa-water"></i> Humidity: {weather.humidity} %
            </p>
          )}
          {weather.visibility && (
            <p className="my-1">
              <i className="fas fa-eye-slash"></i> Visibility:{" "}
              {weather.visibility} metre
            </p>
          )}
          {weather.wind_speed && (
            <p className="mt-1">
              <i className="fas fa-wind"></i> Wind Speed: {weather.wind_speed}{" "}
              metre/sec
            </p>
          )}
          </div>
          {weather.feels_like && (
            <Badge variant="warning"> Feels Like: {weather.feels_like} ℃</Badge>
          )}
        </Card.Body>
      ) : (
       null
      )}
    </Col>
    </Row>
  );
};

export default Weather;
