import React from "react";
import { useDispatch } from "react-redux";
import { Card, Form } from "react-bootstrap";
import { fetchWeatherFromApi } from "../store/actions/forecastActions";

const Search = () => {
  
  const dispatch = useDispatch();

  const getWeatherByCityName = (e) => {
    e.preventDefault();
    const { city } = e.target.elements;
    const cityValue = city.value;

    dispatch(fetchWeatherFromApi(cityValue));
  };

  return (
    <Card.Body className="card">
      <Form onSubmit={getWeatherByCityName}>
        <Form.Group>
          <Form.Control
            type="text"
            name="city"
            placeholder="Search for the City Name"
            autoFocus
          />
        </Form.Group>
      </Form>
    </Card.Body>
  );
};

export default Search;
