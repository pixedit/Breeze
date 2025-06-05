import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./assets/components/navbar/Navbar";
import Home from "./pages/home/Home";
import Weekly from "./pages/weekly/Weekly";
import Daily from "./pages/daily/Daily";
import Hourly from "./pages/hourly/Hourly";
import SearchBar from "./assets/components/searchBar/SearchBar";

const App = () => {
	return (
		<Router>
			<div className="container">
				<SearchBar />
				<div className="weather-app">
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/weekly" element={<Weekly />} />
						<Route path="/daily" element={<Daily />} />
						<Route path="/hourly" element={<Hourly />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
};

export default App;
