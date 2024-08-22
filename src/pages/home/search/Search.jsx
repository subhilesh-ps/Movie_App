import Card from "../../../components/header/card/Card";
import "./Search.css";

const Search = ({ searchResult }) => {
  return (
    <div>
      <div className="search-results">
        {searchResult &&
          searchResult.map((movie) => (
            <div key={movie.id}>
              <Card movie={movie} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Search;
