import React from 'react'
import { Card, Form, Button, Col } from 'react-bootstrap'

const WeatherForm = (props) => (

    <Card.Body className="card">
        <Form onSubmit={props.getWeather}>
            <Form.Group as={Col}>
                <Form.Control type="text" name="city" type="text" placeholder="Your City Name" autoFocus/>
            </Form.Group>
 
            <Button variant="info" type="submit" block>
                Get Weather
            </Button>
        </Form>
    </Card.Body>
);

export default WeatherForm;
