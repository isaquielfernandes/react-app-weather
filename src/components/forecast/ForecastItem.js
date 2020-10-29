import React from "react";
import { unixTimeToWeekDay } from '../../utils/dateUtils'

const ForecastItem = ({ daily }) => {
  
  return (
    <li data-v-3724b8e4 className="mb-2">
      <span data-v-3724b8e4>{unixTimeToWeekDay(daily.dt)}</span>
      <div data-v-3724b8e4 className="day-list-values">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <img
            data-v-3724b8e4
            alt=""
            src={`https://openweathermap.org/img/wn/${daily.weather[0].icon}.png`}
            className="weather-icon"
          />
          <span data-v-3724b8e4>{daily.temp.min} / {daily.temp.max} °C</span>
        </div>
        <span
          data-v-3724b8e4
          className="sub"
          style={{ width: 70, textAlign: "right" }}
        >
          {daily.weather[0].description}
        </span>
        <span data-v-3724b8e4 className="chevron-container">
          <svg
            data-v-3724b8e4
            width="12px"
            height="12px"
            viewBox="0 0 512 512"
            className="icon-down"
          >
            <path
              fill="#48484A"
              d="M98.9,184.7l1.8,2.1l136,156.5c4.6,5.3,11.5,8.6,19.2,8.6c7.7,0,14.6-3.4,19.2-8.6L411,187.1l2.3-2.6  c1.7-2.5,2.7-5.5,2.7-8.7c0-8.7-7.4-15.8-16.6-15.8v0H112.6v0c-9.2,0-16.6,7.1-16.6,15.8C96,179.1,97.1,182.2,98.9,184.7z"
            ></path>
          </svg>
        </span>
      </div>
    </li>
  );
};

export default ForecastItem;
