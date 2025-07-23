import { useContext } from "react";
import { WeatherContext } from "../../assets/context/WeatherContext";
import Loader from "../../assets/components/loader/Loader";
import { convertTemp as convert } from "../../assets/utils/utils";
import "./daily.css";

const Daily = () => {
	const { state } = useContext(WeatherContext);
	const dailyForecast = state.dailyWeather;

	if (state.loading) {
		return <Loader />;
	}
	return (
		<div className="daily-forecast-wrapper">
			{state.city && <h3>Daily Forecast for {state.city}</h3>}
			{dailyForecast &&
				dailyForecast.map((day, index) => {
					const icon = `https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`;
					return (
						<div className="daily-forecast" key={index}>
							<div className="day-main">
								<h4>{day.dt_txt.split(" ")[0]}</h4>
								<div className="day-nutshel">
									<p>
										{convert(day.main.temp, state.unit)}°{state.unit}
									</p>
									<img src={icon} />
									<h5>{day.weather[0].main}</h5>
								</div>
							</div>
							<div className="day-temp">
								<dl>
									<div>
										<dt>Humidity</dt>
										<dd>{day.main.humidity}</dd>
									</div>
									<div>
										<dt>Temp</dt>
										<dd>
											{convert(day.main.temp, state.unit)}°{state.unit}
										</dd>
									</div>
									<div>
										<dt>Feels Like</dt>
										<dd>
											{convert(day.main.feels_like)}°{state.unit}
										</dd>
									</div>
									<div>
										<dt>min</dt>
										<dd>
											{convert(day.main.temp_min, state.unit)}°{state.unit}
										</dd>
									</div>
									<div>
										<dt>max</dt>
										<dd>
											{convert(day.main.temp_max, state.unit)}°{state.unit}
										</dd>
									</div>
								</dl>
							</div>
							<div className="day-detail">
								<p className="day-detail-description">
									{day.weather[0].description}
								</p>
								<dl>
									<div>
										<dt>Visibility</dt>
										<dd>{day.visibility}</dd>
									</div>
									<div>
										<dt>Pressure</dt>
										<dd>{day.main.pressure}</dd>
									</div>
									<div>
										<dt>Wind Speed</dt>
										<dd>{day.wind.speed}</dd>
									</div>
									<div>
										<dt>Wind deg</dt>
										<dd>{day.wind.deg}</dd>
									</div>
									{day.wind.gust && (
										<div>
											<dt>wind gust</dt>
											<dd>{day.wind.gust}</dd>
										</div>
									)}
								</dl>
							</div>
						</div>
					);
				})}
		</div>
	);
};

export default Daily;
