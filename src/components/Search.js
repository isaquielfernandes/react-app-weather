import React from "react";
import { useDispatch } from "react-redux";
import {
  Card,
  Form,
  InputGroup,
  Button,
  Row,
  Col
} from "react-bootstrap";
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
    <Row className="py-5 mt-3">
      <Col md={{ span: 6, offset: 3 }}>
        <Card.Body className="">
          <Form onSubmit={getWeatherByCityName}>
            <Form.Group>
              <InputGroup className="mb-3">
                <Form.Control
                  type="text"
                  name="city"
                  placeholder="Search for the City Name"
                  autoFocus
                />
                <InputGroup.Append>
                  <Button variant="outline-secondary" type="submit">
                    Search
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </Form.Group>
          </Form>
        </Card.Body>
      </Col>
    </Row>
  );
};

export default Search;
