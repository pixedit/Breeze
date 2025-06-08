import { createContext, useReducer } from "react";

const initialState = {
	currentWeather: null,
	hourlyWeather: null,
	dailyWeather: null,
	loading: false,
	error: null,
};
////////// reducer function
const weahterReducer = (state, action) => {
	switch (action.type) {
		case "SET_CURRENT_WEATHER":
			return { ...state, currentWeather: action.payload };
		case "SET_HOURLY_WEATHER":
			return { ...state, dailyWeather: action.payload };
		case "SET_DAILY_WEATHER":
			return { ...state, dailyWeather: action.payload };
		case "SET_LOADING":
			return { ...state, loading: action.payload };
		case "SET_ERROR":
			return { ...state, error: action.payload };
		default:
			return state;
	}
};

////////// context
export const weatherContext = createContext();

////////// provider
export const WeatherProvider = ({ children }) => {
	const [state, dispatch] = useReducer(weahterReducer, initialState);

	return (
		<weatherContext.Provider value={{ state, dispatch }}>
			{children}
		</weatherContext.Provider>
	);
};
