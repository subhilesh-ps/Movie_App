import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import "../../pages/home/search/Search.css";

const Header = ({ input, handleSumbit, setInput }) => {
  return (
    <div className="header">
      <div className="headerLeft">
        <Link to="/">
          {" "}
          <img
            className="header__icon"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
            alt=""
          />
        </Link>
        <Link to="/movies/popular" style={{ textDecoration: "none" }}>
          <span>Popular</span>
        </Link>
        <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
          <span>Top_Rated</span>
        </Link>
        <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
          <span>Upcoming</span>
        </Link>
        <Link to="/movies/now_playing" style={{ textDecoration: "none" }}>
          <span>Now_Playing</span>
        </Link>

        <Link to="/movies/search">
          {" "}
          <div className="searchbox">
            <input
              style={{ textDecoration: "none" }}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <IoSearch
              className="iconsearch"
              onClick={() => {
                handleSumbit();
              }}
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
