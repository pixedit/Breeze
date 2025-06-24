import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import "./navbar.css";
const Navbar = () => {
	return (
		<nav className="navbar">
			<Link to="/">
				<IoHome className="home-button" />
			</Link>
			<Link to="/daily">Daily Forecast</Link>
			<Link to="weekly">Weekly Forecast</Link>
		</nav>
	);
};

export default Navbar;
