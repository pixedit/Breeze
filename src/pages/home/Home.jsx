import "./home.css";
import { CiSun } from "react-icons/ci";
const Home = () => {
	return (
		<div className="home-wrapper">
			<div className="current-summary">
				<h3>Summary</h3>
				<dl>
					<div>
						<dt>Today&#39;s weather:</dt>
						<dd>45</dd>
					</div>
					<div>
						<dt>Tonight&#39;s main</dt>
						<dd>
							Becomes clear and soft <span>35C</span>
						</dd>
					</div>
				</dl>
			</div>
			<div className="current-weather">
				<h3>Current weather</h3>
				<div className="cur-temp-section">
					<div className="real-temp">
						<div className="temp">
							<CiSun />
							<span>30C</span>
						</div>
						<p>
							Feels like: <span>35C</span>
						</p>
					</div>
					<div className="current-data">
						<dl>
							<div>
								<dt>Wind speed:</dt>
								<dd>3.13MPH</dd>
							</div>
							<div>
								<dt>Humidity:</dt>
								<dd>89</dd>
							</div>
							<div>
								<dt>Clouds:</dt>
								<dd>53</dd>
							</div>
							<div>
								<dt>Pressure:</dt>
								<dd>10000</dd>
							</div>
						</dl>
					</div>
				</div>
				<dl style={{ display: "flex", justifyContent: "center" }}>
					<div>
						<dt>Wind gusts:</dt>
						<dd>6.71</dd>
					</div>
					<div>
						<dt>Nutshell:</dt>
						<dd>broken clouds</dd>
					</div>
				</dl>
			</div>
			<div className="weather-description">
				<h3>Description</h3>
				<p>
					SMALL CRAFT ADVISORY REMAINS IN EFFECT FROM 5 PM THIS AFTERNOON TO 3
					AM EST FRIDAY... WHAT...North winds 15 to 20 kt with gusts up to 25 kt
					and seas 3 to 5 ft expected. WHERE...Coastal waters from Little Egg
					Inlet to Great Egg Inlet NJ out 20 nm, Coastal waters from Great Egg
					Inlet to Cape May NJ out 20 nm and Coastal waters from Manasquan Inlet
					to Little Egg Inlet NJ out 20 nm. WHEN...From 5 PM this afternoon to 3
					AM EST Friday. IMPACTS...Conditions will be hazardous to small craft.
				</p>
			</div>
			<div className="hourly-forecast">
				<h3>Hourly forecast</h3>
				<div className="hourly-section">
					<div className="hourly-forecast-card">
						<p>5 PM</p>
						<p>AN EMOJI</p>
						<strong>25C</strong>
						<p>PRECIP</p>
					</div>
					<div className="hourly-forecast-card">
						<p>5 PM</p>
						<p>AN EMOJI</p>
						<strong>25C</strong>
						<p>PRECIP</p>
					</div>
				</div>
			</div>
			<div className="summary-description">
				<h3>Summary</h3>
				<p>Expect a day of partly cloudy with rain</p>
			</div>
		</div>
	);
};

export default Home;
