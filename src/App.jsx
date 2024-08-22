import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import MovieList from "./components/header/movieList/MovieList";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route index element={<Home />}></Route>
            <Route path="movie/:id" element={<h1>movie detail page</h1>}></Route>
            <Route path="movies/:type" element={<MovieList />}></Route>
            <Route path="/*" element={<h1>Error page</h1>}></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
