import React from 'react';
import { Card } from 'react-bootstrap';
import ForecastItem from './ForecastItem'

const ForecastContainer = ({forecast}) => {
    return (
        <Card className="daily-container">
            <Card.Title>
                <h3 data-v-3724b8e4="" className="text-center py-2">8-Day Forecast</h3>
                <hr/>
            </Card.Title>
            <Card.Body className="mt-2 animated fadeInUp day-list">
                {
                    forecast.daily.map(daily => <ForecastItem key={daily.dt} daily={daily}/>)
                }
            </Card.Body>
        </Card>
    );
};

export default ForecastContainer;
