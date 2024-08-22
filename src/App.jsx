import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import MovieList from "./components/header/movieList/MovieList";
import Header from "./components/header/Header";
import Movie from "./pages/home/movieDetails/Movie";
import { useState } from "react";
import Search from "./pages/home/search/Search";

function App() {
  const [input, setInput] = useState();

  const [searchResult, setSearchResult] = useState([]);
  const fetchData = async (value) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${input}?api_key=b7b7d45fa413b59beb06cc95ae54d171`
      );
      const data = await response.json();
      setSearchResult(data.results);
    } catch (error) {
      console.error("Error fetching search result:", error);
    }
  };

  const handleSumbit = (value) => {
    setInput(value);
    fetchData(value);
    setInput("");
  };

  return (
    <>
      <div className="App">
        <Router>
          <Header input={input} handleSumbit={handleSumbit} setInput={setInput} />

          <Routes>
            <Route index element={<Home />}></Route>
            <Route path="movie/:id" element={<Movie />}></Route>
            <Route path="movies/:type" element={<MovieList />}></Route>
            <Route path="movies/search" element={<Search searchResult={searchResult} />}></Route>
            <Route path="/*" element={<h1>Error page</h1>}></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
