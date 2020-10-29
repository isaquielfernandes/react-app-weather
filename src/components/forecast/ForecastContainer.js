import React from 'react';
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import ForecastItem from './ForecastItem'

const ForecastContainer = () => {

    const  { forecast } = useSelector(state => state.forecast)
    
    return (
        <Card className="daily-container">
            <Card.Title>
                <h3 data-v-3724b8e4="" className="text-center pt-2">Forecast</h3>
                <hr/>
            </Card.Title>
            <Card.Body className="animated fadeInUp day-list">
                {
                    forecast.daily.map(daily => <ForecastItem key={daily.dt} daily={daily}/>)
                }
            </Card.Body>
        </Card>
    );
};

export default ForecastContainer;
