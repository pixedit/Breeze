import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import "./navbar.css";
import UnitSelector from "../button/UnitSelector";
const Navbar = () => {
	return (
		<nav className="navbar">
			<Link to="/">
				<IoHome className="home-button" />
			</Link>
			<Link to="/daily">Daily Forecast</Link>
			<UnitSelector />
		</nav>
	);
};

export default Navbar;
