import React from "react";
//import PropTypes from "prop-types";
import { unixTimeToHours } from "../../utils/dateUtils";

const ForecastDetails = ({ daily }) => {
  return (
    <div data-v-4b61fb05 className="scrolling-container-content">
      <div
        data-v-1ab7fc2c
        data-v-3724b8e4
        className="daily-detail-container"
        data-v-4b61fb05
      >
        <div data-v-1ab7fc2c className="top-section">
          <img
            data-v-1ab7fc2c
            alt="weather-icon"
            src={`https://openweathermap.org/img/wn/${daily.weather[0].icon}@2x.png`}
            className="weather-icon"
          />
          <div data-v-1ab7fc2c>
            <p data-v-1ab7fc2c className="text-capitalize">{daily.weather[0].description}.</p>
            <p data-v-1ab7fc2c>The high will be {Math.round(daily.temp.max)}°C, the low will be {Math.round(daily.temp.min)}°C.</p>
          </div>
        </div>
        <ul
          data-v-1b8538d2
          data-v-1ab7fc2c
          className="pl-3 weather-items text-container orange-side standard-padding"
        >
          <li data-v-1b8538d2>
            <svg
              data-v-025fe884
              data-v-1b8538d2
              viewBox="0 0 315.2 315.2"
              xmlSpace="preserve"
              className="icon-rain"
            >
              <g data-v-025fe884>
                <g data-v-025fe884 fill="#48484a">
                  <path
                    data-v-025fe884
                    d="M267.6,55c-28.8-27.6-67.2-44.8-110-44.8c-43.6,0-82.8,17.6-111.6,46C17.6,84.6,0,123.8,0,167v0.8
        c0,5.6,4.8,10.4,10.4,10.4c5.6,0,10.4-4.8,10.4-10.4c0-7.2,2.8-14,8-18.8c4.8-4.8,11.6-8,18.8-8s14,2.8,18.8,8
        c4.8,4.8,8,11.6,8,18.8c0,5.6,4.8,10.4,10.4,10.4s10.4-4.8,10.4-10.4c0-7.2,2.8-14,8-18.8c4.8-4.8,11.6-8,18.8-8
        c7.2,0,14,2.8,18.8,8c4.8,4.8,8,11.6,8,18.8V273c0,0.4,0,0.8,0,0.8c0,8.4,3.6,16.4,9.2,22c5.6,5.6,13.2,9.2,22,9.2
        c8.4,0,16.4-3.6,22-9.2c5.6-5.6,9.2-13.2,9.2-22c0-5.6-4.8-10.4-10.4-10.4c-5.6,0-10.4,4.8-10.4,10.4c0,2.8-1.2,5.6-3.2,7.2
        c-2,2-4.4,3.2-7.2,3.2s-5.6-1.2-7.2-3.2c-2-2-3.2-4.4-3.2-7.2c0-0.4,0-0.4,0-0.8V167.8c0-7.2,2.8-14,8-18.8c4.8-4.8,11.6-8,18.8-8
        s14,2.8,18.8,8c4.8,4.8,8,11.6,8,18.8c0,5.6,4.8,10.4,10.4,10.4c5.6,0,8-4.4,8-10.4c0-7.2,2.8-14,8-18.8c4.8-4.8,11.6-8,18.8-8
        c6.8,0,12.8,2.4,17.6,6.8c4.8,4.4,8,10,8.8,16.8c0.8,5.2,5.2,9.2,10.4,9.2c5.6,0,10-4.8,10-10.4C314,121,296,82.6,267.6,55z
         M268.4,120.6c-12.8,0-24.8,5.2-33.2,14c-1.2,1.2-2.4,2.4-3.6,4c-1.2-1.2-2.4-2.8-3.6-4c-8.4-8.4-20.4-14-33.2-14
        c-12.8,0-24.8,5.2-33.2,14c-1.2,1.2-2.4,2.4-3.6,4c-1.2-1.2-2.4-2.8-3.6-4c-8.4-8.4-20.4-14-33.2-14c-12.8,0-24.8,5.2-33.2,14
        c-1.2,1.2-2.4,2.4-3.6,4c-1.2-1.2-2.4-2.8-3.6-4c-8.4-8.4-20.4-14-33.2-14c-7.2,0-13.6,1.6-19.6,4.4c6.8-20.8,18.4-39.2,33.2-54
        C86,46.2,120.4,31,158,31c37.2,0,70.8,14.8,95.2,38.8c15.6,15.2,27.6,34,34.8,55.6C282,122.2,275.2,120.6,268.4,120.6z"
                  />
                </g>
              </g>
              
            </svg>
            <span data-v-1b8538d2>{daily.clouds} %</span>
          </li>
          <li data-v-1b8538d2>
            <div data-v-1b8538d2 className="wind-line">
              <svg
                data-v-47880d39
                viewBox="0 0 1000 1000"
                enableBackground="new 0 0 1000 1000"
                xmlSpace="preserve"
                className="icon-wind-direction"
                style={{ transform: `rotate(${daily.wind_deg}deg)` }}
              >
                <g data-v-47880d39 fill="#48484a">
                  <path
                    data-v-47880d39
                    d="M510.5,749.6c-14.9-9.9-38.1-9.9-53.1,1.7l-262,207.3c-14.9,11.6-21.6,6.6-14.9-11.6L474,48.1c5-16.6,14.9-18.2,21.6,0l325,898.7c6.6,16.6-1.7,23.2-14.9,11.6L510.5,749.6z"
                  />
                  <path
                    data-v-47880d39
                    d="M817.2,990c-8.3,0-16.6-3.3-26.5-9.9L497.2,769.5c-5-3.3-18.2-3.3-23.2,0L210.3,976.7c-19.9,16.6-41.5,14.9-51.4,0c-6.6-9.9-8.3-21.6-3.3-38.1L449.1,39.8C459,13.3,477.3,10,483.9,10c6.6,0,24.9,3.3,34.8,29.8l325,898.7c5,14.9,5,28.2-1.7,38.1C837.1,985,827.2,990,817.2,990z M485.6,716.4c14.9,0,28.2,5,39.8,11.6l255.4,182.4L485.6,92.9l-267,814.2l223.9-177.4C454.1,721.4,469,716.4,485.6,716.4z"
                  />
                </g>
              </svg>{' '}
              {daily.wind_speed} m/s
            </div>
          </li>
          <li data-v-1b8538d2>
            <svg
              data-v-7bdd0738
              data-v-1b8538d2
              width="96pt"
              height="96pt"
              viewBox="0 0 96 96"
              className="icon-pressure"
            >
              <g
                data-v-7bdd0738
                transform="translate(0,96) scale(0.100000,-0.100000)"
                fill="#48484a"
                stroke="none"
              >
                <path
                  data-v-7bdd0738
                  d="M351 854 c-98 -35 -179 -108 -227 -202 -27 -53 -29 -65 -29 -172 0
    -107 2 -119 29 -172 38 -75 104 -141 180 -181 58 -31 66 -32 176 -32 110 0
    118 1 175 32 77 40 138 101 178 178 31 57 32 65 32 175 0 110 -1 118 -32 176
    -40 76 -106 142 -181 179 -49 25 -71 29 -157 32 -73 2 -112 -1 -144 -13z m259
    -80 c73 -34 126 -86 161 -159 24 -50 29 -73 29 -135 0 -62 -5 -85 -29 -135
    -57 -119 -161 -185 -291 -185 -130 0 -234 66 -291 185 -24 50 -29 73 -29 135
    0 130 66 234 185 291 82 40 184 41 265 3z"
                />
                <path
                  data-v-7bdd0738
                  d="M545 600 c-35 -35 -68 -60 -80 -60 -27 0 -45 -18 -45 -45 0 -33 -50
    -75 -89 -75 -18 0 -41 -5 -53 -11 -20 -11 -20 -11 3 -35 12 -13 33 -24 46 -24
    17 0 23 -6 23 -23 0 -13 10 -33 23 -45 30 -28 47 -13 47 43 0 32 6 47 28 68
    15 15 37 27 48 27 26 0 44 18 44 44 0 12 26 47 60 81 l60 61 -28 27 -28 27
    -59 -60z"
                />
              </g>
            </svg>
             {daily.pressure} hPa
          </li>
          <li data-v-1b8538d2>
            <span data-v-1b8538d2 className="symbol">
              Humidity: {daily.humidity} %
            </span>
          </li>
          <li data-v-1b8538d2>
            <span data-v-1b8538d2 className="symbol">
              UV: {Math.round(daily.uvi)}
            </span>
          </li>
          <li data-v-1b8538d2>
            <span data-v-1b8538d2 className="symbol">
              Dew point: {Math.round(daily.dew_point)}°C
            </span>
          </li>
        </ul>
        <table data-v-1ab7fc2c>
          <tbody>
            <tr data-v-1ab7fc2c>
              <th data-v-1ab7fc2c />
              <th data-v-1ab7fc2c>Morning</th>
              <th data-v-1ab7fc2c>Afternoon</th>
              <th data-v-1ab7fc2c>Evening</th>
              <th data-v-1ab7fc2c>Night</th>
            </tr>
            <tr data-v-1ab7fc2c>
              <td data-v-1ab7fc2c>Temperature</td>
              <td data-v-1ab7fc2c> {Math.round(daily.temp.morn)}°C </td>
              <td data-v-1ab7fc2c> {Math.round(daily.temp.day)}°C </td>
              <td data-v-1ab7fc2c> {Math.round(daily.temp.eve)}°C </td>
              <td data-v-1ab7fc2c> {Math.round(daily.temp.night)}°C </td>
            </tr>
            <tr data-v-1ab7fc2c>
              <td data-v-1ab7fc2c>Feels like</td>
              <td data-v-1ab7fc2c> {Math.round(daily.feels_like.morn)}°C </td>
              <td data-v-1ab7fc2c> {Math.round(daily.feels_like.day)}°C </td>
              <td data-v-1ab7fc2c> {Math.round(daily.feels_like.eve)}°C </td>
              <td data-v-1ab7fc2c> {Math.round(daily.feels_like.night)}°C </td>
            </tr>
          </tbody>
        </table>
        <div data-v-1ab7fc2c className="item-container">
          <div data-v-2d771159 data-v-1ab7fc2c className="item">
            <span data-v-2d771159 className="label badge badge-light text-wrap">
              Sunrise
            </span>
            <span data-v-2d771159 className="value">
              {unixTimeToHours(daily.sunrise)}
            </span>
          </div>
          <div data-v-2d771159 data-v-1ab7fc2c className="item">
            <span data-v-2d771159 className="label badge badge-light text-wrap">
              Sunset
            </span>
            <span data-v-2d771159 className="value">
              {unixTimeToHours(daily.sunset)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

ForecastDetails.propTypes = {};

export default ForecastDetails;
