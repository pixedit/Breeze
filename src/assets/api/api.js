// const API = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m"

import axios from "axios";

const fetchCurrentWeather = async (latitude, longitude, dispatch) => {
	try {
		dispatch({ type: "SET_LOADING", payload: true });
		const response = await axios.get("https://api.open-meteo.com/v1/forecast", {
			params: {
				latitude,
				longitude,
				current_weather: true,
			},
		});
		dispatch({
			type: "SET_CURRENT_WEATHER",
			payload: response.data.current_weather,
		});
		dispatch({ type: "SET_LOADING", payload: false });
	} catch (error) {
		dispatch({ type: "SET_ERROR", payload: error.message });
		dispatch({ type: "SET_LOADING", payload: false });
	}
};

export default fetchCurrentWeather;
