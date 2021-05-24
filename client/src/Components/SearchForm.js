import "./SearchForm.css";
import "./NavBar.css";

const SearchForm = ({ onCitySubmit }) => {
    const handleSubmit = function (event) {
        event.preventDefault();
        const chosenCity = event.target.city.value;
        // const chosenCity = "Edinburgh";
        console.log(chosenCity);
        onCitySubmit(chosenCity);
    };

    return (
        <div id="form-wrapper" class="nav-bar">
            <h1 id="header">Weather</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="city"
                    id="city"
                    placeholder="Edinburgh"
                />
                <button id="search-button" type="submit">
                    Search
                </button>
            </form>
        </div>
    );
};

export default SearchForm;
