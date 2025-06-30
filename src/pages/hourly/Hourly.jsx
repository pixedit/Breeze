import { useContext } from "react";
import { WeatherContext } from "../../assets/context/WeatherContext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import "./hourly.css";
import { convertTemp as convert } from "../../assets/utils/utils";
import { CiDroplet } from "react-icons/ci";
const Hourly = () => {
	const { state } = useContext(WeatherContext);
	const hourlyData = state.hourlyWeather?.slice(0, 24);

	return (
		<section className="hourly-section">
			<h3>Hourly Forecast (next 48 hours)</h3>

			<Swiper
				modules={[FreeMode]}
				freeMode={true}
				spaceBetween={12}
				slidesPerView={"auto"}
				className="hourly-swiper">
				{hourlyData?.map((hour, index) => {
					const temp = Math.round(hour.main.temp);
					const humidity = hour.main.humidity;
					const icon = hour.weather[0].icon;
					const time = new Date(hour.dt * 1000).toLocaleTimeString([], {
						hour: "2-digit",
						minute: "2-digit",
						hour12: true,
					});

					return (
						<SwiperSlide key={index} style={{ width: "70px" }}>
							<div className="hour-card">
								<p>{time}</p>
								<img
									src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
									alt="icon"
								/>
								<p className="hourly-temp">
									{convert(temp, state.unit)}
									<span>°{state.unit}</span>
								</p>
								<p className="humidity">
									<CiDroplet />
									{humidity}%
								</p>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</section>
	);
};

export default Hourly;
