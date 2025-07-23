import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./assets/components/navbar/Navbar";
import Home from "./pages/home/Home";
import Daily from "./pages/daily/Daily";
import SearchBar from "./assets/components/searchBar/SearchBar";
import Footer from "./assets/components/footer/Footer";
import { useContext } from "react";
import { WeatherContext } from "./assets/context/WeatherContext";

const App = () => {
	const { state } = useContext(WeatherContext);
	return (
		<Router>
			<div className="app-wrapper">
				<div className="app">
					<div className="container">
						<div className="search-wrapper">
							<SearchBar />
							<img src="public/logo/logo.png" className="logo" />
						</div>
						<div className="weather-app">
							{state.city && <Navbar />}
							<Routes>
								<Route path="/" element={<Home />} />
								<Route path="/daily" element={<Daily />} />
							</Routes>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</Router>
	);
};

export default App;
