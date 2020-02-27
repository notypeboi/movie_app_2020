import React from "react";
import PropTyes from "prop-types";
import "./Movie.css";

function Movie({ id, title, year, summary, poster, genres }) {
  return (
    <div class="movie">
      <img scr={poster} alt={title} title={title} />

      <div class="movie_data">
        <h3 class="movie_title">{title}</h3>
        <h4 class="movie_genres"> {genres}</h4>
        <h5 class="movie_year">{year}</h5>
        <p class="movieummary">{summary}</p>
      </div>
    </div>
  );
}

Movie.PropTyes = {
  id: PropTyes.number.isRequired,
  title: PropTyes.string.isRequired,
  summary: PropTyes.string.isRequire,
  year: PropTyes.number.isRequired,
  poster: PropTyes.string.isRequired,
  genres: PropTyes.arrayOf(PropTyes.string).isRequired
};

export default Movie;
