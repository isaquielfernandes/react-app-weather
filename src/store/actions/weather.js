
import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';

export const getWeather = (city) => {
  return async dispatch => {
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`);

      if(!res.ok) {
        const resData = await res.json();
      }

      const resData = await res.json();
      dispatch({
        type: GET_WEATHER,
        payload: resData
      });
    }catch(err) {
      dispatch({
        type: ERROR,
        payload: err.message
      });
    }
  }
}