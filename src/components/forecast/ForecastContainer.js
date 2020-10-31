import React from "react";
import { Card, Row, Col, Accordion } from "react-bootstrap";
import { useSelector } from "react-redux";
import ForecastItem from "./ForecastItem";

const ForecastContainer = () => {
  const { forecast } = useSelector((state) => state.forecast);
  console.log(forecast.daily);
  return (
    <>
    {forecast.daily ? (
    <Row className="mt-3">
      <Col>
        <div className="daily-container">
          <Card.Title>
            <h3 data-v-3724b8e4="" className="text-center pt-2">
              Forecast
            </h3>
            <hr />
          </Card.Title>
          <Card.Body className="animated fadeInUp p-0 day-list">
            <Accordion >
            {forecast.daily.map((daily) => (
              <ForecastItem key={daily.dt} daily={daily} />
            ))}
            </Accordion>
          </Card.Body>
        </div>
      </Col>
    </Row>
   ) : (
  
   )}
   </>
  );
};

export default ForecastContainer;
