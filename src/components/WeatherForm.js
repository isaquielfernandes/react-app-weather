import React from 'react'
import { Card, Form, Button } from 'react-bootstrap'

const WeatherForm = (props) => (

    <Card.Body className="card">
        <Form onSubmit={props.getWeather}>
            <div className="form-group">
                <input type="text" name="city" placeholder="Your City Name" className="form-control" autoFocus/>
            </div>
            <Button variant="info" type="submit" block>
                Get Weather
            </Button>
        </Form>
    </Card.Body>
);

export default WeatherForm;
