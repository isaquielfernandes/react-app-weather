const initialState = {
	weatherData: {
		main: {
			feels_like: 0,
			humidity: 0,
			pressure: 0,
			temp: 0,
			temp_max: 0,
			temp_min: 0,
		},
		name: '',
		sys: {
			country: '',
			sunrise: 0,
			sunset: 0,
		},
		weather: {
			id: 200,
			main: '',
			description: '',
			icon: '',
		},
		wind: {
			deg: 0,
			speed: 0,
		},
	},
	extendedWeatherData: [],
	isError: false,
};

export default function (state = initialState, action) {
	switch (action.type) {
		case 'FETCH_WEATHER_START':
			return state;
		case 'FETCH_WEATHER_SUCCESS':
			return {
				...state,
				weatherData: action.payload.weather,
				extendedWeatherData: action.payload.forecast,
			};
		case 'FETCH_WEATHER_ERROR':
			return {
				...state,
				isError: true,
			};
		default:
			return state;
	}
}