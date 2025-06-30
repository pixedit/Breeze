import { useContext } from "react";
import "./selector.css";
import { WeatherContext } from "../../context/WeatherContext";

const UnitSelector = () => {
	const { state, setUnit } = useContext(WeatherContext);
	const handleChange = (e) => {
		setUnit(e.target.value);
	};
	return (
		<select
			value={state.unit}
			onChange={handleChange}
			className="unit-selector">
			<option value="F">°F</option>
			<option value="C">°C</option>
		</select>
	);
};

export default UnitSelector;
