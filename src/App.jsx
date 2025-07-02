import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./assets/components/navbar/Navbar";
import Home from "./pages/home/Home";
import Daily from "./pages/daily/Daily";
import Hourly from "./pages/hourly/Hourly";
import SearchBar from "./assets/components/searchBar/SearchBar";
import Footer from "./assets/components/footer/Footer";

const App = () => {
	return (
		<Router>
			<div className="container">
				<div className="search-wrapper">
					<SearchBar />
					<img src="public/logo/logo.png" className="logo" />
				</div>
				<div className="weather-app">
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/daily" element={<Daily />} />
						<Route path="/hourly" element={<Hourly />} />
					</Routes>
				</div>
			</div>
			<Footer />
		</Router>
	);
};

export default App;
