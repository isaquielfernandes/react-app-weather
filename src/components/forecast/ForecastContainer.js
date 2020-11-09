import React from "react";
import { Row, Col, Accordion } from "react-bootstrap";
import { useSelector } from "react-redux";
import ForecastItem from "./ForecastItem";

const ForecastContainer = () => {

  const { forecast } = useSelector((state) => state.forecast);
  const variant = [
     'Primary',
     'Secondary',
     'Success',
     'Danger',
     'Warning',
     'Info',
     'Light',
     'Dark',
  ]
   
  return (
    <Row className="mt-3">
      <Col className="col-md-6 mx-auto">
        <div style={{ fontSize: '80%' }} className="daily-container">
          <Accordion className="animated fadeInUp day-list">
            {forecast.daily.map((daily, idx) => (
              <ForecastItem key={idx} daily={daily} variant={variant[idx]} />
            ))}
          </Accordion>
        </div>
      </Col>
    </Row>
  );
};

export default ForecastContainer;
