import React from 'react'
import { Card, Form } from 'react-bootstrap'

const WeatherForm = props => (

    <Card.Body className="card">
        <Form onSubmit={props.getWeather}>
            <div className="form-group">
                <input type="text" name="city" placeholder="Your City Name" className="form-control" autoFocus/>
            </div>
            <button className="btn btn-info btn-block">
                Get Weather
            </button>
        </Form>
    </Card.Body>
);

export default WeatherForm;
