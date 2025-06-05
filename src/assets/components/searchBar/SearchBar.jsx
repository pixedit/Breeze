import "./searchBar.css";
const SearchBar = () => {
	return (
		<form className="search">
			<input type="text" placeholder="Enter a City..." />
			<button>Search</button>
		</form>
	);
};

export default SearchBar;
