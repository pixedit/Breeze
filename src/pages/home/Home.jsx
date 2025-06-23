import { useContext } from "react";
import "./home.css";
import { WeatherContext } from "../../assets/context/WeatherContext";
import { convertUnixToTime } from "../../assets/utils/utils";
import Hourly from "../hourly/Hourly";

const Home = () => {
	const { state } = useContext(WeatherContext);
	const data = state.currentWeather;

	if (state.loading) return <p>Loading...</p>;
	if (!data) return <p>No weather data yet. Please search a city!</p>;

	const sunrise = convertUnixToTime(data.sys.sunrise, data.timezone); // → "06:08 AM"
	const sunset = convertUnixToTime(data.sys.sunset, data.timezone); // → "07:49 PM"

	return (
		<div>
			{data && (
				<div className="cur-temp-section">
					<div className="left-section">
						<dl>
							<div>
								<dt>feels like:</dt>
								<dd>{data?.main?.feels_like}°F</dd>
							</div>
							<div>
								<dt>pressure:</dt>
								<dd>{data.main.pressure} hPa</dd>
							</div>
							<div>
								<dt>wind speed:</dt>
								<dd>{data.wind.speed} m/s</dd>
							</div>
							<div>
								<dt>wind deg:</dt>
								<dd>{data.wind.deg} km</dd>
							</div>

							{data.wind.gust && (
								<div>
									<dt>wind gust:</dt>
									<dd>{data.wind.gust}</dd>
								</div>
							)}
							<div>
								<dt>visibility:</dt>
								<dd>{data.visibility}</dd>
							</div>
						</dl>
					</div>
					<div className="main">
						<h3>
							{data.name} <span>{data.sys.country}</span>
						</h3>
						<strong>Today</strong>
						<div className="cur-weather">
							<img
								src={`https://openweathermap.org/img/wn/${state.currentWeather.weather[0].icon}@2x.png`}
								alt="Weather Icon"
							/>
							<p>{data.main.temp}°F</p>
						</div>
					</div>
					<div className="right-section">
						<dl>
							<div className="bold">{data.weather[0].description}</div>
							<div>
								<dt>min:</dt>
								<dd>{data.main.temp_min}°F</dd>
							</div>
							<div>
								<dt>max:</dt>
								<dd>{data.main.temp_max}°F</dd>
							</div>
							<div>
								<dt>humidity:</dt>
								<dd>{data.main.humidity}</dd>
							</div>
							{data.main.sea_level && (
								<div>
									<dt>sea level:</dt>
									<dd>{data.main.sea_level} hPa</dd>
								</div>
							)}
							<div>
								<dt>sunrise:</dt>
								<dd>{sunrise}</dd>
							</div>
							<div>
								<dt>sunset:</dt>
								<dd>{sunset}</dd>
							</div>
						</dl>
					</div>
				</div>
			)}
			<Hourly />
		</div>
	);
};

export default Home;
