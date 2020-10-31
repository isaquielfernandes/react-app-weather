import React from "react";
import { Card, Row, Col, Accordion } from "react-bootstrap";
import { useSelector } from "react-redux";
import ForecastItem from "./ForecastItem";

const ForecastContainer = () => {
  const { forecast } = useSelector((state) => state.forecast);
  
  return (
    <Row className="mt-3">
      <Col>
        <div className="daily-container">
          {/*<Card.Title className="card">
            <h3 data-v-3724b8e4="" className="text-center pt-2">
              Forecast
            </h3>
            <hr />
          </Card.Title>*/}
          <Accordion className="animated fadeInUp day-list">
            {forecast.daily.map((daily) => (
              <ForecastItem key={daily.dt} daily={daily} />
            ))}
          </Accordion>
        </div>
      </Col>
    </Row>
  );
};

export default ForecastContainer;
