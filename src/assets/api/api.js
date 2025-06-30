import axios from "axios";

const API_KEY = "950fcb05e96122a1c462492f54d2e444";
const GEO_URL = "http://api.openweathermap.org/geo/1.0/direct";
const WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather";
const HOURLY_URL = "https://api.openweathermap.org/data/2.5/forecast";

///////////// Fetch latitude and longitude for a given city.
export const fetchCoordinates = async (city) => {
	try {
		const response = await axios.get(
			`${GEO_URL}?q=${city}&limit=1&appid=${API_KEY}`
		);
		if (response.data.length > 0) {
			return { lat: response.data[0].lat, lon: response.data[0].lon };
		} else {
			console.error("City not found");
			return null;
		}
	} catch (error) {
		console.error("Geocoding error:", error.message);
		return null;
	}
};

//////////////  Fetch weather data using latitude & longitude.
export const fetchWeather = async (city) => {
	try {
		const coords = await fetchCoordinates(city);
		if (!coords) return null;

		const response = await axios.get(
			`${WEATHER_URL}?lat=${coords.lat}&lon=${coords.lon}&appid=${API_KEY}&units=imperial`
		);

		return response.data;
	} catch (error) {
		console.error("Error fetching weather data:", error.message);
		return null;
	}
};

////////// Fetch hourly forecast
export const fetchHourlyForecast = async (city) => {
	try {
		const coords = await fetchCoordinates(city);
		if (!coords) return null;

		const response = await axios.get(
			`${HOURLY_URL}?lat=${coords.lat}&lon=${coords.lon}&appid=${API_KEY}&units=imperial`
		);

		return response.data.list.slice(0, 16); // 24 hour condition
	} catch (error) {
		console.error("Error fetching hourly forecast:", error.message);
		return null;
	}
};

////////////////// Fetch daily forecast
export const fetchDailyForecast = async (city) => {
	try {
		const coords = await fetchCoordinates(city);
		if (!coords) return null;

		const response = await axios.get(
			`${HOURLY_URL}?lat=${coords.lat}&lon=${coords.lon}&appid=${API_KEY}&units=imperial`
		);
		const data = response.data.list;
		const daily = data.filter((item) => {
			const date = new Date(item.dt * 1000);
			return date.getHours() === 12;
		});
		return daily;
	} catch (error) {
		console.error("Error fetching daily forecast:", error.message);
		return null;
	}
};
