import { useReducer, useEffect } from 'react'
import aios from 'aixos'

const API_URL = ''
const ACTIONS = {
    GET_DATA: 'get-data',
    MAKE_REQUEST: 'make-request',
    ERROR: 'error'
}

state = {
    temperature: '',
    weather,
    description: '',
    humidity: '',
    wind_speed: 0,
    city: '',
    country: '',
    error: null
};
const BASE_URL = ''

function reducer(state, action) {
    switch(action.type){
        case ACTIONS.MAKE_REQUEST:
            return { loading: true, jobs: [] }
        case ACTIONS.GET_DATA:
            return { ...state, loading: false, jobs: action.payload.jobs }
        case ACTIONS.ERROR:
            return { ...state, loading: false, error: action.payload.error, jobs: []}
        default:
            return state
    }
}

const useFetchWeather = (params) => {

    const [state, dispatch] = useReducer(reducer, { jobs: [], loading: true})

    useEffect(() => {
        const cancelToken = axios.CancelToken.source()
        dispatch({type: ACTIONS.MAKE_REQUEST})
        axios.get(BASE_URL, {
            cancelToken: cancelToken.token,
            params: {mardown: true, ...params}
        }).then(res => {
            dispatch({type: ACTIONS.GET_DATA, payload: {jobs: res.data}})
        }).catch(e => {
            if(axios.isCancel(e)) return
            dispatch({type: ACTIONS.ERROR, payload: {error: e}})
        })

        return () => {
            cancelToken.cancel()
        }

    }, [params])

    return state
}


export default getWeather = async (e) => {
    e.preventDefault();
    const {
        city
    } = e.target.elements;
    const cityValue = city.value;

    if (cityValue) {
        // metric parameter is for Celcius Unit
        //const API_URL_1 = `http://api.openweathermap.org/data/2.5/forecast/daily?q=London&cnt=7&appid=${WEATHER_KEY}&units=metric`;
        const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${WEATHER_KEY}&units=metric`;
        const response = await fetch(API_URL);
        const data = await response.json();

        /* res = await fetch(API_URL_1);
        const data1 = await res.json();*/

        this.setState({
            temperature: data.main.temp,
            weather: data.weather,
            description: data.weather[0].description,
            humidity: data.main.humidity,
            wind_speed: data.wind.speed,
            city: data.name,
            country: data.sys.country,
            error: null
        });
    } else {
        this.setState({
            error: 'Please enter a City and a Country.'
        });
    }

}

export default useFetchWeather
