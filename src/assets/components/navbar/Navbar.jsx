import { NavLink } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import "./navbar.css";
import UnitSelector from "../button/UnitSelector";
const Navbar = () => {
	return (
		<nav className="navbar">
			<NavLink to="/">
				<IoHome className="home-button" />
			</NavLink>
			<NavLink
				to="/daily"
				className={({ isActive }) => (isActive ? "active" : null)}>
				Daily Forecast
			</NavLink>
			<UnitSelector />
		</nav>
	);
};

export default Navbar;
