import { useReducer } from "react";
import { WeatherContext } from "./WeatherContext";
import { fetchWeather } from "../api/api";
const initialState = {
	city: "",
	currentWeather: null,
	hourlyWeather: null,
	dailyWeather: null,
	loading: false,
	error: null,
};
////////// reducer function
const weatherReducer = (state, action) => {
	switch (action.type) {
		case "SET_CITY":
			return { ...state, city: action.payload };
		case "SET_CURRENT_WEATHER":
			return { ...state, currentWeather: action.payload };
		case "SET_HOURLY_WEATHER":
			return { ...state, hourlyWeather: action.payload };
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

////////// provider
export const WeatherProvider = ({ children }) => {
	const [state, dispatch] = useReducer(weatherReducer, initialState);

	const fetchWeatherData = async (city) => {
		dispatch({ type: "SET_LOADING", payload: true });
		dispatch({ type: "SET_CITY", payload: city });

		try {
			const weatherData = await fetchWeather(city);

			if (!weatherData) {
				dispatch({
					type: "SET_ERROR",
					payload: weatherData?.message || "Weather data not found!",
				});
				return;
			}

			dispatch({ type: "SET_CURRENT_WEATHER", payload: weatherData });
			dispatch({ type: "SET_ERROR", payload: null });
		} catch (error) {
			dispatch({ type: "SET_ERROR", payload: error.message });
		} finally {
			dispatch({ type: "SET_LOADING", payload: false });
		}
	};

	return (
		<WeatherContext.Provider value={{ state, dispatch, fetchWeatherData }}>
			{children}
		</WeatherContext.Provider>
	);
};
