import "./hourly.css";

const Hourly = () => {
	return (
		<div className="hourly">
			<h3 className="hourly-header-title">
				Hourly forecast <span>11/06/2025</span>
			</h3>
			<div className="hourly-data-wrapper wrapper">
				<strong>7 AM</strong>
				<p className="hourly-condition">Sunny</p>
				<dl>
					<div>
						<dt>RealFeel temp</dt>
						<dd>18</dd>
					</div>
					<div>
						<dt>Wind speed</dt>
						<dd>6 Km/h</dd>
					</div>
					<div>
						<dt>Precipitation probability</dt>
						<dd>18%</dd>
					</div>
					<div>
						<dt>Uv index</dt>
						<dd>2(low)</dd>
					</div>
					<div>
						<dt>Humidity</dt>
						<dd>18%</dd>
					</div>
					<div>
						<dt>Cloud Cover</dt>
						<dd>0%</dd>
					</div>
				</dl>
			</div>
			<div className="hourly-data-wrapper wrapper">
				<strong>7 AM</strong>
				<p className="hourly-condition">Sunny</p>
				<dl>
					<div>
						<dt>RealFeel temp</dt>
						<dd>18</dd>
					</div>
					<div>
						<dt>Wind speed</dt>
						<dd>6 Km/h</dd>
					</div>
					<div>
						<dt>Precipitation probability</dt>
						<dd>18%</dd>
					</div>
					<div>
						<dt>Uv index</dt>
						<dd>2(low)</dd>
					</div>
					<div>
						<dt>Humidity</dt>
						<dd>18%</dd>
					</div>
					<div>
						<dt>Cloud Cover</dt>
						<dd>0%</dd>
					</div>
				</dl>
			</div>
		</div>
	);
};

export default Hourly;
